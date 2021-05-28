import React from "react";
import { useHistory } from "react-router-dom";

const BackToProfileButton = () => {
  let history = useHistory();

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/profile")}
      >
        <i className="fa fa-arrow-right"></i> Back to Profile
      </button>
    </div>
  );
};

export default BackToProfileButton;
