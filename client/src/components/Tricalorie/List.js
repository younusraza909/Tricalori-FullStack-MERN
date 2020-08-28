import React, { Fragment } from "react";
import CaloriCount from "./CaloriCount";

const List = () => {
  return (
    <Fragment>
      <CaloriCount />
      <ul id="item-list" class="collection">
        <li class="collection-item" id="item-0">
          <strong>Steak Dinner: </strong> <em>1200 Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>
        <li class="collection-item" id="item-0">
          <strong>Cookie: </strong> <em>400 Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>
        <li class="collection-item" id="item-0">
          <strong>Eggs: </strong> <em>300 Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default List;
