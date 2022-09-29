import React from "react";
import { connect } from "react-redux";
import { handleSteps } from "../store/action";

function Steps(props) {
  function handleClick(step) {
    props.dispatch(handleSteps(step));
  }
  return (
    <>
      <p>Steps</p>
      <button onClick={() => handleClick(5)}>5</button>
      <button onClick={() => handleClick(10)}>10</button>
      <button onClick={() => handleClick(15)}>15</button>
    </>
  );
}

function mapStateToProps(state) {
  return {
    step: state.step,
  };
}

export default connect(mapStateToProps)(Steps);
