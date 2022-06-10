import "./App.css";
import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      state = state + 1;
      return state;
    case "DECREMENT":
      state = state - 1;
      return state;
    default:
      return undefined;
  }
};
const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        DECREMENT
      </button>
    </div>
  );
};

export default ReducerTutorial;
