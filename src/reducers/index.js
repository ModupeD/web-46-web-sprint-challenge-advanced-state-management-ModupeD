import {
  LOADING_START,
  LOADING_SUCCESS,
  LOADING_FAILURE,
  POSITION_UPDATE,
  UPDATE_NAME,
  SUMMARY_UPDATE,
} from "../actions";

export const initialState = {
  smurfs: [],
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_SUCCESS:
      return { ...state, loading: true };
    case LOADING_FAILURE:
      return { ...state, loading: false };
    case POSITION_UPDATE:
      return { ...state, loading: true };
    case UPDATE_NAME:
      return { ...state, loading: true };
    case SUMMARY_UPDATE:
      return { ...state, loading: true };
    default:
      console.log("Error: unknown action type in Title Reducer");
      return state;
  }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
