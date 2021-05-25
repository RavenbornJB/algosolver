import React from "react";
import AdditionalData from "../AdditionalData";
import "./styles.scss";

class PersonalInfo extends React.Component {
  render() {
    const imageName = require("../../../../images/profile-pictures/" +
      "mr_kappa69" +
      ".png");
    return (
      <div className="personalInfo">
        <img src={imageName.default} alt="Profile" />
        <div className="data">
          <h2>mr_kappa69</h2>
          <AdditionalData />
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
