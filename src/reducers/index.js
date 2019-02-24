import { combineReducers } from 'redux';

import initialStateReducer from './InitialStateReducer';
import selectedSlotReducer from './SelectedSlotReducer';
// import brandListReducer from './BrandListReducer';
// import pedalBoardSlotsReducer from './PedalBoardSlotsReducer';


export default combineReducers({
    initialState: initialStateReducer,
    selectedSlot: selectedSlotReducer
    // brandList: brandListReducer
    // effectBrands: populateEffectTypesReducer,
    // selectedSlot: populateEffectTypesReducer,
    // pedalBoardSlots: pedalBoardSlotsReducer
})

