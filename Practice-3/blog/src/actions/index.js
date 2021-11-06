import jsonPlaceholder from "../api/jsonPlaceholder";
import _ from "lodash";

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
  return (dispatch) => {
    _fetchUser(userID, dispatch);
  };
};

// this allows the memoize library to make network requests only
// to unique urls
const _fetchUser = async (userID, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${userID}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

// combining both middlewares to create a better easier middleware
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // getting the current state of the redux store
  // _ is the lodash lib version for map and filter functions
  // thus we are getting posts from current state of store, mapping and finding
  // ids from it, and then finding the unique ids from this list of ids
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(async (userId) => await dispatch(fetchUser(userId)));
};
