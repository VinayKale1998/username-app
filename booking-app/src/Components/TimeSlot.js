import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { slotActions } from "../Store";
function TimeSlot() {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display);
  const slots = useSelector((state) => state.slots);
  const clickHanlder = (event) => {
    console.log(event.target.innerHTML);
    dispatch(slotActions.setValue({ movie: event.target.innerHTML }));
  };
  return (
    <div>
      {display.slots.map((item) => (
        <button
          onClick={clickHanlder}
          className={`${
            slots.value ? (slots.value == item ? "bg-green-300 " : " ") : ""
          } }text-xs transition-all sm:text-sm md:text-md lg:text-lg xl:text-xl  mx-1 my-1 px-1 py-1 border border-1 border-red-300 rounded-sm cursor-pointer`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default TimeSlot;
