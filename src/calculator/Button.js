import React from "react";

const Button = (props) => {
  return (
    <React.Fragment>
      <input
        style={{ padding: "5px", fontSize: "18px" }}
        type="button"
        value={props.label}
        onClick={props.handleClick()}
      />
    </React.Fragment>
  );
};

export default Button;
