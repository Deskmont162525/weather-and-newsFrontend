import { historyState } from "../states/hisoryState";
import { ADD_DATA_HISTORY } from "../type";

const historyReducer = (state = historyState, action) => {
  switch (action?.type) {
    case ADD_DATA_HISTORY:
      return action.payload;
    default:
      return state;
  }
};
export default historyReducer;
