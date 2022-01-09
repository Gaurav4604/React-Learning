import streams from "../apis/streams";
import history from "../history";
import types from "./types";

export const signIn = (userId) => {
  return {
    type: types.SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: types.SIGN_OUT,
  };
};

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post("/streams", { ...formValues, userId });
    history.push("/");
    dispatch({
      type: types.CREATE_STREAM,
      payload: response.data,
    });
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    history.push("/");

    dispatch({
      type: types.DELETE_STREAM,
      payload: id,
    });
  };
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get("/streams");

    dispatch({
      type: types.FETCH_STREAMS,
      payload: response.data,
    });
  };
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({
      type: types.FETCH_STREAM,
      payload: response.data,
    });
  };
};

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    history.push("/");
    dispatch({
      type: types.EDIT_STREAM,
      payload: response.data,
    });
  };
};
