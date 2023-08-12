import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { slotActions } from "../Store";
import Button from "../UI/Button";
function TimeSlot() {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display);
  const slots = useSelector((state) => state.slots);
  const clickHanlder = (event) => {
    console.log(event.target.innerHTML);
    dispatch(slotActions.setValue({ slot: event.target.innerHTML }));
  };
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
            slots.value ? (slots.value == item ? "bg-green-300 " : "") : ""
          }text-xs transition-all sm:text-sm md:text-md lg:text-lg xl:text-xl  mx-1 my-1 px-1 py-1 border border-1 border-red-300 rounded-sm cursor-pointer  hover:bg-green-200`}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}

export default TimeSlot;
