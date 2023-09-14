import React, { useState } from "react";



//reusable component
function Button(props) {


  const clickHandler = (event) => {
    props.onClick(event);

    // setColor((previous) => {
    //   if (previous=="bg-white") return "bg-green-300";
    //   else return "bg-white";
    // });
  };

  return (
    <button
      type="button"
      className={`${props.className}`}
      onClick={clickHandler}
    >
      {props.children}
    </button>
  );
}

export default Button;
