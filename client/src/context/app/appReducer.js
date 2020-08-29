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

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ITEM:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: null,
      };
    case ADD_ITEM:
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
        error: null,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        loading: false,
        error: null,
        items: state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };

    case DELETE_ITEM:
      return {
        ...state,
        loading: false,
        error: null,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};
