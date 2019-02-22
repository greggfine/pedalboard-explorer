import { combineReducers } from 'redux';
import { effectsData } from '../effectsData';
import { EFFECT_TYPE_SELECTED } from '../constants';

const populateEffectTypesReducer = () => {
    return effectsData
}

const selectEffectTypeReducer = (state={}, action) => {
    switch(action.type){
        case EFFECT_TYPE_SELECTED:
            return {...state, effectType: action.payload}
        default:
            return state;
    }
}

export default combineReducers({
    effectTypes: populateEffectTypesReducer,
    selectedEffectType: selectEffectTypeReducer
})