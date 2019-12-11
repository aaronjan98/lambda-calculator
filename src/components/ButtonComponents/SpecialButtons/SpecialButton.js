import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="special_button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span onClick={() => props.setDisplay(props.button)}>{props.button}</span>
    </button>
  );
};

export default SpecialButton;