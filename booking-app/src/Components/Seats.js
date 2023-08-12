import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../UI/Input";

function Seats() {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display);
  const seats = useSelector((state) => state.seats);


  return (
    <div className=" seat-row flex flex-wrap ">
      {display.seats.map((item) => (
        <div
          // onClick={clickHanlder}
     
          className={`seat-column ${seats.value[item]>0?" bg-green-300 ":""} text-xs transition-all sm:text-sm md:text-md lg:text-lg xl:text-xl items-center  mx-1 my-1 px-1 py-1 border border-1 border-red-300 rounded-sm cursor-pointer  hover:bg-green-200`}
          key={item}>
          <h1>{item}</h1>
          <Input id={item} value={seats.value[item]} ></Input>
        </div>
      ))}
    </div>
  );
}

export default Seats;
