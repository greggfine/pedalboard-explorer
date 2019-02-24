import { SLOT_SELECTED } from '../constants';

export default (state=['', '', '', '', '', '', '', '', '', ''], action) => {
    switch(action.type){
        case SLOT_SELECTED:
            const { slot, brand } = action.payload;
            state.splice(slot - 1, 1, brand)
            return [...state]
        default:
            return state;
    }
}

// trying to get slot num and brand into obj