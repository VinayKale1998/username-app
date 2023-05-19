import { useSelector,useDispatch } from 'react-redux';
import {useState} from 'react'
import classes from './Counter.module.css';

const Counter = () => {


  const [counterInput,setInput]= useState(0)

const counter = useSelector(state=>{return state.counter})

const show = useSelector(state=>state.showCounter)

const dispatch= useDispatch();


const addHandler=(event)=>{
  event.preventDefault();

  dispatch({type:'ADD', amount:+counterInput})
  console.log(10)
  setInput(0)

}

const inputHandler=(event)=>{
  setInput(event.target.value);
}

const toggleCounterHandler = () => {
dispatch({type:"TOGGLE"})
};


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
     
     
      <form onSubmit={addHandler} >
      <input type="number" min="0" onChange={inputHandler} value={counterInput}></input>
      <button >Add Amount</button>
      </form>
      
      
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
