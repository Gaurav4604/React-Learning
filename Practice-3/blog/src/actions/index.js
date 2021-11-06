import jsonPlaceholder from "../api/jsonPlaceholder";

// this is an action that will be passed to the middleware
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    // dispatch function will be used to return the action object
    // to the reducer
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = (userID) => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${userID}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};
