import React from "react";
const CalcButton = ({ name, whenClicked }) => (
  <button
    className=" rounded-lg hover:bg-sky-500/70 bg-sky-500/50 h-10"
    onClick={() => whenClicked(name)}
  >
    {name}
  </button>
);

export default CalcButton;
