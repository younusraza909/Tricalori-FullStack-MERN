import React from "react";

const Form = () => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Add Meal / Food Item</span>
        <form className="col">
          <div className="row">
            <div className="input-field col s6">
              <input type="text" placeholder="Add Item" id="item-name" />
              <label htmlFor="item-name">Meal</label>
            </div>
            <div className="input-field col s6">
              <input
                type="number"
                placeholder="Add Calories"
                id="item-calories"
              />
              <label htmlFor="item-calories">Calories</label>
            </div>
            <button className=" btn blue darken-3">
              <i className="fa fa-plus"></i> Add Meal
            </button>
            <button className=" btn orange">
              <i className="fa fa-pencil-square-o"></i> Update Meal
            </button>
            <button className=" btn red">
              <i className="fa fa-remove"></i> Delete Meal
            </button>
            <button className=" btn grey pull-right">
              <i className="fa fa-chevron-circle-left"></i> Back
            </button>
            <button className="btn blue lighten-3 pull-right">Clear All</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
