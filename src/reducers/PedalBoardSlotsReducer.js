export default (state=[{slot: 1, brand: 'boss'}], action) => {
    switch(action.type){
        case 'PEDAL_BOARD':
            return state
        default:
            return state
    }
}