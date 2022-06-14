import "./Textarea.css";
import React from "react";

const Textarea = React.forwardRef((props, ref) => {
  return (
    <textarea
      className="textarea"
      type={props.type}
      placeholder={props.placeholder}
      ref={ref}
    />
  );
});

export default Textarea;
