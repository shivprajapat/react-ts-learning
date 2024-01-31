import React, { useReducer } from "react";

type CounterType = {
  count: number;
};

type UpdateType = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetType = {
  type: "reset";
};

type CounterAction = UpdateType | ResetType;

const initialState = { count: 0 };

function reducer(state: CounterType, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <p>
        Count: <span className="red">{state.count}</span>
      </p>
    </div>
  );
};

export default Counter;
