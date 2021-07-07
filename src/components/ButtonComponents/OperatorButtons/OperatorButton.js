import React from "react";

const OperatorButton = (props) => {
  //console.log(props);
  return (
    <button className="operator_button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span onClick={() => props.setDisplay(props.button.char)}>{props.button.char}</span>
    </button>
  );
};

export default OperatorButton;
