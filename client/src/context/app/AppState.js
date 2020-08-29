import React, { useReducer, Children } from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";
import axios from "axios";

import {
  ADD_ITEM,
  DELETE_ITEM,
  GET_ITEM,
  UPDATE_ITEM,
  SET_CURRENT,
  CLEAR_CURRENT,
  ITEM_ERROR,
  SET_LOADING,
} from "./../types";

const AppState = (props) => {
  const initialState = {
    items: [],
    error: null,
    loading: false,
    current: null,
    total: null,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const getItem = async () => {
    setLoading();
    try {
      const res = await axios.get("/api/items");
      dispatch({ type: GET_ITEM, payload: res.data });
    } catch (err) {
      dispatch({ type: ITEM_ERROR, payload: err.response.data.msg });
    }
  };

  const addItem = async (item) => {
    setLoading();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/items", item, config);
      dispatch({ type: ADD_ITEM, payload: res.data });
    } catch (err) {
      dispatch({ type: ITEM_ERROR, payload: err.response.data.msg });
    }
  };

  const updateItem = async (item) => {
    setLoading();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`/api/items/${item._id}`, item, config);
      dispatch({ type: UPDATE_ITEM, payload: res.data });
    } catch (err) {
      dispatch({ type: ITEM_ERROR, payload: err.response.data.msg });
    }
  };

  const deleteItem = async (id) => {
    setLoading();
    try {
      await axios.delete(`/api/items/${id}`);
      dispatch({ type: DELETE_ITEM, payload: id });
    } catch (err) {
      dispatch({ type: ITEM_ERROR, payload: err.response.data.msg });
    }
  };

  const setCurrent = (item) => {
    dispatch({
      type: SET_CURRENT,
      payload: item,
    });
  };
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <AppContext.Provider
      value={{
        items: state.items,
        error: state.error,
        loading: state.loading,
        current: state.current,
        getItem,
        addItem,
        setCurrent,
        updateItem,
        clearCurrent,
        deleteItem,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
