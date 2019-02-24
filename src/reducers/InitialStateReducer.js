import initialState  from '../effectsData';
import { EFFECT_TYPE_SELECTED } from '../constants';

export default (state=initialState, action) => {
    switch(action.type){
        case EFFECT_TYPE_SELECTED: 
        const selectedEffect = state.effects.find((effect) => {
            return effect.category === action.payload
        })
             return {...state, selectedEffect: selectedEffect.brands}
        default:
            return state;
    }
}


