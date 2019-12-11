import React from "react";

const NumberButton = (props) => {
  //console.log(props);
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
        <span onClick={() => console.log('button pressed!')}>{props.button}</span>
    </button>
  );
};

export default NumberButton;