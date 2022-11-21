const initialState = 0 

const changeTheNumber = (state = initialState, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state + 1
            break
        case 'DECREMENT':
            if(state > 0) {
                return state - 1
            }            
            break
        default:
            return state
            break
    }
}

export default changeTheNumber