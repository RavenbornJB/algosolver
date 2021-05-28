import React from "react";
import "./styles.scss";

const SuccessMessage = (props) => {
  return (
    <div className="alert alert-success success">
      <p>{props.children}</p>
    </div>
  );
};

export default SuccessMessage;
