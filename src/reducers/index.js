import { combineReducers } from 'redux';

const rootReducer = (state={}, action={}) => {
    switch(action.type){
        case 'OK':
            return {...state}
        default:
            return state;
    }
}

export default combineReducers({
    rootReducer
})