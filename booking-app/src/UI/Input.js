import React, { useState } from "react";
import { seatActions } from "../Store";
import { useDispatch, useSelector } from "react-redux";


//reusable component
function Input(props) {
  const [inputValue, setInputValue] = useState(0);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
  
    setInputValue(event.target.value);
    if (Number(event.target.value) > 10 ) {
      window.alert("We're sorry, you can do a booking for maximum of 10 seats");
      setInputValue(10);
    } else if (Number(event.target.value) < 0 ) {
      window.alert("We're sorry, you can do a booking for minimum of 1 seat");
      setInputValue(0);
    } else {
      // console.log(event.target.id)
      dispatch(seatActions.setValue({ id:event.target.id, value:event.target.value}));
    }
  };

  const blurHandler=(event)=>{

    if(event.target.value=='')
    {
      dispatch(seatActions.setValue({ id:event.target.id, value:0}));
    }

  }

  return (
    <input
      id={`#${props.id}`}

      
      onChange={changeHandler}
      className="text-xs transition-all sm:text-sm md:text-md lg:text-lg xl:text-xl rounded-md   border border-1 border-gray-600 text-center"
      value={props.value}
      type="number"
      step={1}
      max={10}
      min={0}
      onBlur={blurHandler}
      
    ></input>
  );
}

export default Input;
