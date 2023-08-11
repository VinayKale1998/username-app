import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
function Seats() {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display);
  const [clicked, setClick] = useState();

  const ref = useRef();

  const clickHanlder = (event) => {
    console.log(event.target.firstChild);
  };
  return (
    <div>
      {display.seats.map((item) => (
        <button
          onClick={clickHanlder}
          ref={ref}
          className="text-xs transition-all sm:text-sm md:text-md lg:text-lg xl:text-xl items-center  mx-1 my-1 px-1 py-1 border border-1 border-red-300 rounded-sm cursor-pointer"
        >
          <h1>{item}</h1>
          <input
            type="number"
            step={1}
            className="text-xs transition-all sm:text-sm md:text-md lg:text-lg xl:text-xl bg-gray-200 border border-1 border-gray-600 text-center"
            defaultValue={"0"}
          ></input>
        </button>
      ))}
    </div>
  );
}

export default Seats;
