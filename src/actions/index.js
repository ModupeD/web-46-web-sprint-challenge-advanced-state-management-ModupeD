import axios from "axios";

export const LOADING_START = "LOADING_START";
export const LOADING_SUCCESS = "LOADING_SUCCESS";
export const LOADING_FAILURE = "LOADING_FAILURE";
export const UPDATE_NAME = "UPDATE_NAME";
export const POSITION_UPDATE = "POSITION_UPDATE";
export const NICK_NAME = "NICK_NAME";
export const SUMMARY_UPDATE = "SUMMARY_UPDATE";

export const fetchSmurfs = (dispatch) => {
  dispatch({ type: LOADING_START });
  axios.get(
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) =>
        dispatch({ type: LOADING_SUCCESS, payload: res.data.browser })
      )
      .catch((err) => dispatch({ type: LOADING_FAILURE, payload: err }))
  );

  const updateName = (dispatch) => {
    dispatch({ type: UPDATE_NAME, payload: updateName });
  };

  const nickName = (dispatch) => {
    dispatch({ type: NICK_NAME, payload: nickName });
  };

  const positionUpdate = (dispatch) => {
    dispatch({ type: POSITION_UPDATE, payload: positionUpdate });
  };

  const summaryUpdate = (dispatch) => {
    dispatch({ type: SUMMARY_UPDATE, payload: summaryUpdate });
  };
};
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
