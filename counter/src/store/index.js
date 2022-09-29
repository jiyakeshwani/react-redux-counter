import { createStore } from "redux";

function reducer(state = { value: 0, step: 1, max: Infinity }, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        value: state.value + (state.max > state.value ? state.step : 0),
      };
      break;
    case "decrement":
      return { ...state, value: state.value - state.step };
      break;
    case "reset":
      return { ...state, value: 0 };
      break;
    case "steps":
      return { ...state, step: action.payload };
      break;
    case "max":
      return { ...state, max: action.payload };
      break;
    default:
      return state;
  }
}

var store = createStore(reducer);
console.log(store);
export default store;
