

const redux = require("redux")

 const defaultState = {
    counter:0,
    showCounter:true
 } 

const reducer=(state= defaultState,action)=>{
    
    if(action.type==="ADD")
    {
        console.log(action.amount)
        return {
            
            counter: state.counter+action.amount,
            showCounter:state.showCounter
        }
    }

    if(action.type==="SUBTRACT")
    {
        return {
            counter:state.counter-action.amount,
            showCounter:state.showCounter
        }
    }

    if(action.type==="TOGGLE")
    {
        return {
            counter:state.counter,
            showCounter:!state.showCounter
        }
    }
    return state;

}


const store = redux.createStore(reducer)

console.log(store.getState());


console.log(store.getState())

const subscriber=()=>{
    return 
}

export default store;