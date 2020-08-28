import React, { Fragment, useContext, useEffect } from "react";
import CaloriCount from "./CaloriCount";
import AppContext from "./../../context/app/appContext";

const List = () => {
  const appContext = useContext(AppContext);
  const { getItem, items, loading, setCurrent } = appContext;

  useEffect(() => {
    getItem();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <CaloriCount />
      <ul id="item-list" className="collection">
        {loading && <h4 style={{ marginLeft: "40%" }}>Loading....</h4>}
        {items.length === 0 && loading === false && (
          <h4 style={{ marginLeft: "33%" }}>Insert Meals To Display</h4>
        )}
        {!loading &&
          items.map((item) => (
            <li class="collection-item" key={item._id}>
              <strong>{item.meal}: </strong> <em>{item.calories} Calories</em>
              <a
                href="#"
                className="secondary-content"
                onClick={() => {
                  setCurrent(item);
                }}
              >
                <i class="fas fa-pencil-alt"></i>
              </a>
            </li>
          ))}
      </ul>
    </Fragment>
  );
};

export default List;
