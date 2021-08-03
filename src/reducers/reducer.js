import { FETCH_DATA, ERROR } from "../types";

const initialState = { routes: [], error: "" };
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, [action.routeName]: action.data };
    case ERROR:
      return { ...state, error: action.msg };
    default:
      return state;
  }
};
export default appReducer;
