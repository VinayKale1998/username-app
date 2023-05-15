

const arr= [1,2,3,4,5]

const addArr= arr.reduce((currentNumber,item)=>{

    return currentNumber+item
},0)

console.log(addArr)


const[value,dispatch]= useReducer(reducer,initial,setFunction)