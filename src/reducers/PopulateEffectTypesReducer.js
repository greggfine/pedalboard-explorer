import { effectsData } from '../effectsData';
import { EFFECT_TYPE_SELECTED, SLOT_SELECTED } from '../constants';

export default (state=effectsData, action) => {
    switch(action.type){
        case EFFECT_TYPE_SELECTED: 
            const selected = state.effectInfo.filter((obj) => {
                return obj.category === action.payload
            })
            return {...state, effectBrands: selected}
        case SLOT_SELECTED:
            return {...state, selectedSlot: action.payload}
        default:
            return state;
    }
}