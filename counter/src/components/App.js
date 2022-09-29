import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../store/action";
import Steps from "./Steps";
import Max from "./Max";

function App(props) {
  return (
    <>
      <h1>{props.count}</h1>
      <button onClick={() => props.dispatch(increment())}>Increment</button>
      <button onClick={() => props.dispatch(decrement())}>Decrement</button>
      <button onClick={() => props.dispatch(reset())}>Reset</button>
      <Steps />
      <Max />
    </>
  );
}

function mapStateToProps(state) {
  return {
    count: state.value,
  };
}

export default connect(mapStateToProps)(App);
