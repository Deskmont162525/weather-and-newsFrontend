import { noticiasState } from "../states/noticiasState";
import { ADD_NEWSPAPERS } from "../type";

const noticiasReducer = (state = noticiasState, action) => {
  switch (action?.type) {
    case ADD_NEWSPAPERS:
      return action.payload;
    default:
      return state;
  }
};
export default noticiasReducer;