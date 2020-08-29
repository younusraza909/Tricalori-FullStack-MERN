import React, { useContext } from "react";
import AppContext from "./../../context/app/appContext";

const CaloriCount = () => {
  const appContext = useContext(AppContext);
  const { items } = appContext;
  let total = items.map((item) => item.calories);
  const totalCalories = total.reduce((a, b) => {
    return a + b;
  }, 0);
  return (
    <h3 class="center-align">
      Total Calories: <span class="total-calories">{totalCalories}</span>
    </h3>
  );
};

export default CaloriCount;
