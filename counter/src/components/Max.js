import React from "react";
import { connect } from "react-redux";
import { updateMax } from "../store/action";

function Max(props) {
  function handleMaxValue(max) {
    props.dispatch(updateMax(max));
  }
  return (
    <>
      <p>Max Value</p>
      <button onClick={() => handleMaxValue(15)}>15</button>
      <button onClick={() => handleMaxValue(100)}>100</button>
      <button onClick={() => handleMaxValue(200)}>200</button>
    </>
  );
}
function mapStateToProps(state) {
  return {
    max: state.max,
  };
}
export default connect(mapStateToProps)(Max);
