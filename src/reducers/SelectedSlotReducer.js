import { SLOT_SELECTED } from '../constants';

export default (state=['', '', '', '', '', '', '', '', '', ''], action) => {
    switch(action.type){
        case SLOT_SELECTED:
            const { slot, brand } = action.payload;
            console.log('slot: ', slot, 'brand: ', brand)
            console.log(state)
            if(state.includes(brand)){
                state.splice(state.indexOf(brand), 1, '')
                state.splice(slot, 1, brand)
            } else {
                state.splice(slot, 1, brand)
            }
            return [...state]
        default:
            return state;
    }
}

// slice: ["./images/ocd.png", "https://www.malmomusikaffar.com/media/catalog/prod…970ab036de70892d86c6d221abfe/7/6/765811580584.jpg", "http://files.effectsdatabase.com/gear/pics/proco_rat-1st_001.jpg", "", "", "", "", "", "", ""]
// state: ["./images/ocd.png", "https://www.malmomusikaffar.com/media/catalog/prod…970ab036de70892d86c6d221abfe/7/6/765811580584.jpg", "http://files.effectsdatabase.com/gear/pics/proco_rat-1st_001.jpg", "", "", "", "", "", "", ""]