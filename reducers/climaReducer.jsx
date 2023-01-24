import { climaState } from "../states/climaState";
import { ADD_WEATHER } from "../type";

const climaReducer = (state = climaState, action) => {
  switch (action?.type) {
    case ADD_WEATHER:
      return action.payload;
    default:
      return state;
  }
};
export default climaReducer;
