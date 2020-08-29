import React, { useContext, useState, Fragment, useEffect } from "react";
import AppContext from "./../../context/app/appContext";
import AlertContext from "./../../context/alert/alertContext";

const Form = () => {
  const appContext = useContext(AppContext);
  const alertContext = useContext(AlertContext);
  const { addItem, current, updateItem, clearCurrent, deleteItem } = appContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (current) {
      setMeal(current.meal);
      setCalories(current.calories);
    }
  }, [current]);

  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState("");

  const AddItemBtn = () => {
    if (meal === "" || calories === "") {
      setAlert("Kinldy Fill All Fields", "danger");
    } else {
      addItem({
        meal,
        calories,
      });
    }
  };

  const UpdateItemBtn = () => {
    updateItem({
      meal,
      calories,
      _id: current._id,
    });
    clearCurrent();
  };

  const onChangeMeal = (e) => {
    setMeal(e.target.value);
  };

  const onChangeCalories = (e) => {
    setCalories(e.target.value);
  };

  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Add Meal / Food Item</span>
        <form className="col">
          <div className="row">
            <div className="input-field col s6">
              <input
                type="text"
                placeholder="Add Meal"
                value={meal}
                onChange={onChangeMeal}
              />
            </div>
            <div className="input-field col s6">
              <input
                type="number"
                placeholder="Add Calories"
                value={calories}
                onChange={onChangeCalories}
              />
            </div>
            {!current && (
              <Fragment>
                <button className=" btn blue darken-3" onClick={AddItemBtn}>
                  <i className="fa fa-plus"></i> Add Meal
                </button>
              </Fragment>
            )}

            {/* Btn On Condition */}
            {current && (
              <Fragment>
                {" "}
                <button className=" btn orange" onClick={UpdateItemBtn}>
                  <i className="fa fa-pencil-square-o"></i> Update Meal
                </button>
                <button
                  className=" btn red"
                  onClick={() => {
                    deleteItem(current._id);
                  }}
                >
                  <i className="fa fa-remove"></i> Delete Meal
                </button>
                <button
                  className=" btn grey"
                  onClick={() => {
                    clearCurrent();
                    setMeal("");
                    setCalories("");
                  }}
                >
                  <i className="fa fa-chevron-circle-left"></i> Back
                </button>
              </Fragment>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
