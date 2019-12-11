import React, { useState } from "react";
// import Numbers from "../ButtonComponents/NumberButtons/Numbers";


const Display = () => {
  const [display, setDisplay] = useState(0);
  return <div className="display">{display}{/* Display any props data here */}</div>;
};

export default Display;
