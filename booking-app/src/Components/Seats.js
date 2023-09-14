import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../UI/Input";

function Seats() {
  const dispatch = useDispatch();
  
  //subscribing to the display and seats state from redux
  const display = useSelector((state) => state.display);
  const seats = useSelector((state) => state.seats);


  //renders a list of seat types in a div with each div containing input tags for user inputs on number of seats
  return (
    <div className=" seat-row flex flex-wrap ">
      {display.seats.map((item) => (
        <div
          // onClick={clickHanlder}
     
          className={`seat-column ${seats.value[item]>0?"  hover:scale-105  bg-gradient-to-r from-yellow-600 to-red-600 ":""} text-xs transition-all sm:text-sm md:text-md lg:text-lg xl:text-xl items-center  mx-1 my-1 px-1 py-1 border border-1 border-red-900 rounded-sm cursor-pointer  hover:bg-gradient-to-r from-yellow-600 to-red-600`}
          key={item}>
          <h1>{item}</h1>
          <Input id={item} value={seats.value[item]} ></Input>
        </div>
      ))}
    </div>
  );
}

export default Seats;
