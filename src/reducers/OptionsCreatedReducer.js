import { OPTIONS_CREATED } from '../constants';

// const numOptions = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numOptions = [
    {slot: '', disabledState:false, selected: true , boardSlot: ''},
    {slot: 1, disabledState:false, selected: false, boardSlot: ''},
    {slot: 2, disabledState:false, selected: false , boardSlot: ''}, 
    {slot: 3, disabledState:false, selected: false , boardSlot: ''}, 
    {slot: 4, disabledState:false, selected: false , boardSlot: ''}, 
    {slot: 5, disabledState:false, selected: false , boardSlot: ''}, 
    {slot: 6, disabledState:false, selected: false , boardSlot: ''}, 
    {slot: 7, disabledState:false, selected: false , boardSlot: ''}, 
    {slot: 8, disabledState:false, selected: false , boardSlot: ''},
    {slot: 9, disabledState:false, selected: false , boardSlot: ''},
    {slot: 10, disabledState:false,selected:false  , boardSlot: ''},
]
export default (state=numOptions, action) => {
    switch(action.type){
        case OPTIONS_CREATED:
        const { slot, brand, disabledState } = action.payload;
        console.log('slot: ', slot, 'brand: ', brand, 'disabledState: ', disabledState)

        for(let key in state){
            if(state[key].boardSlot === brand){
                state[key].boardSlot = ''
            }
        }
        if(state[slot]){
            state[slot-1].boardSlot = brand;
            state.map((obj, i) => {
                console.log('slot: ', slot, 'obj.slot: ', obj.slot, 'i: ', i)
                if(+slot === obj.slot && i.disabledState === true) {
                    i.disabledState = false;
                    obj.disabledState = true;
                } else if(+slot === obj.slot) {
                        obj.disabledState = true;}
            })
        }

      

        return [...state]   
        default:
            return state;
    }
}
