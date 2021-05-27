import React from "react";
import {useSelector} from "react-redux";

import AdditionalData from "../AdditionalData";
import "./styles.scss";

import {selectUser} from "../../../stores/LoginStore";

const PersonalInfo = () => {
    const imageName = require("../../../../images/profile-pictures/" +
      "mr_kappa69" +
      ".png");

    const user = useSelector(selectUser);


    return (
      <div className="personalInfo">
        <img src={imageName.default} alt="Profile" />
        <div className="data">
          <h2>{user.nick}</h2>
          <AdditionalData />
        </div>
      </div>
    );
}

export default PersonalInfo;
