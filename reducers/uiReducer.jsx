import { uiState } from "../states/uiState";
import { ADD_USERS_DATA } from "../type";

const uiReducer = (state = uiState, action) => {
  switch (action?.type) {
    case ADD_USERS_DATA:
      return action.payload;
    default:
      return state;
  }
};
export default uiReducer;
