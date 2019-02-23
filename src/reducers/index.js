import { combineReducers } from 'redux';
import { effectsData } from '../effectsData';
import { EFFECT_TYPE_SELECTED } from '../constants';


export const populateEffectTypesReducer = (state=effectsData, action) => {
    switch(action.type){
        case EFFECT_TYPE_SELECTED: 
            const selected = state.effectInfo.filter((obj) => {
                return obj.category === action.payload
            })
            return {...state, effectBrands: selected}
        default:
            return state;
    }
}

