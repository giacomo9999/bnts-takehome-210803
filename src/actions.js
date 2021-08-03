import { FETCH_DATA, ERROR } from "./types";

export const fetchData = (url, routeName) => {
  return (dispatch) => {
    return fetch(url)
      .then((res) => res.json())
      .then((json) =>
        dispatch({ type: FETCH_DATA, data: json, routeName: routeName })
      )
      .catch((err) => dispatch({ type: ERROR, msg: "Unable to fetch data." }));
  };
};
