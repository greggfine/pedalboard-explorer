import { combineReducers } from 'redux';

import populateEffectTypesReducer from './PopulateEffectTypesReducer';
import pedalBoardSlotsReducer from './PedalBoardSlotsReducer';


export default combineReducers({
    effectsInfo: populateEffectTypesReducer,
    effectBrands: populateEffectTypesReducer,
    selectedSlot: populateEffectTypesReducer,
    pedalBoardSlots: pedalBoardSlotsReducer
})

