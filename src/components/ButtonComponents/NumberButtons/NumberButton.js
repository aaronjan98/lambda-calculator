import React from "react";

const NumberButton = (props) => {
  //console.log(props);
  return (
    <button className={"number-button"}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
        <span onClick={() => props.setDisplay(props.button)}>{props.button}</span>
    </button>
  );
};

export default NumberButton;