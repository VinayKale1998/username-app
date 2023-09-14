import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { slotActions } from "../Store";
import Button from "../UI/Button";


  //subscribing to the display and movie state from redux
function TimeSlot() {
  const dispatch = useDispatch();
  
  //subscribing to the display and slot state from redux
  const display = useSelector((state) => state.display);
  const slots = useSelector((state) => state.slots);

    //handles state updation by action disptach upon user selection
  const clickHanlder = (event) => {
    dispatch(slotActions.setValue({ slot: event.target.innerHTML }));
  };

  
  //renders a list of seats and handles user selection 
  return (
    <div className="slot-row">
      {display.slots.map((item) => (
        <Button
          onClick={clickHanlder}
          key={item}
          className={`slot-column ${
            slots.value
              ? slots.value == item
                ? "slot-column-selected "
                : ""
              : ""
          } ${
            slots.value ? (slots.value == item ? "bg-gradient-to-r from-yellow-600 to-red-600 " : "") : ""
          } hover:scale-105 text-xs transition-all sm:text-sm md:text-md lg:text-lg xl:text-xl  mx-1 my-1 px-1 py-1 border border-1 border-red-900 rounded-sm cursor-pointer  hover:bg-gradient-to-r from-yellow-600 to-red-600`}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}

export default TimeSlot;
