import React from "react";
import "./styles.scss";

const ErrorMessage = (props) => {
  return (
    <div className="alert alert-danger error">
      <p>{props.children}</p>
    </div>
  );
};

export default ErrorMessage;
