import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import React from "react";
import Cart from "../Cart/Cart";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary></MealsSummary>
    
      <AvailableMeals></AvailableMeals>
    </React.Fragment>
  );
};

export default Meals;
