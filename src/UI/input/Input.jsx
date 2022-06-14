import "./Input.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      className="input"
      type={props.type}
      placeholder={props.placeholder}
      ref={ref}
    />
  );
});

export default Input;
