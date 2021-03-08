const initState =  {
    name : "A"
}


const cartReducer = (state=initState,action)=>{
    
    switch(action.type){
        case "ADD":
            state.name = action.payload
            console.log('cart reducer add action')
            break
        default:
            state = state

    }
    
    console.log('state',state)
    return state;
}

export default cartReducer