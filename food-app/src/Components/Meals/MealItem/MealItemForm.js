import classes from "./MealItemForm.module.css";
import React, { useContext } from "react";
import Input from "../../UI/Input";
import { useState } from "react";
import InputContext from "../../../Store/InputContext";

const MealItemForm = (props) => {
  const [inputValue, setValue] = useState("1");

  const ctx = useContext(InputContext);

  const addHandler = (event) => {
    event.preventDefault();
    console.log(typeof inputValue)
    const receivedCartItem = ctx.dummyMeals.filter(
      (item) => item.id == props.id
    );
    console.log(receivedCartItem)

    ctx.setItemHandler({
      id: props.id,
      amount: inputValue,
      name: receivedCartItem[0].name,
      description: receivedCartItem[0].description,
      price: Number(receivedCartItem[0].price),
      itemTotal:Math.round(Number(inputValue)*Number(receivedCartItem[0].price))
    },'ADD');

    setValue('1');
  };

  return (
    <form className={classes.form}>
      <div>
        <Input
          input={{
            type: "number",
            id: `${props.id}`,
            min: 0,
            
            max: 5,
            step: 1,
          }}
          onSetValue={setValue}
          value={inputValue}
        ></Input>
      </div>
      <button onClick={addHandler}> Add to Cart</button>
    </form>
  );
};

export default MealItemForm;
