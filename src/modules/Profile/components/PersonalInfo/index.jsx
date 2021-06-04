import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

import AdditionalData from "../AdditionalData";
import "./styles.scss";

import {selectUser} from "../../../redux/AuthReducer";



const PersonalInfo = () => {
  const user = useSelector(selectUser);

  let history = useHistory();

  const imagePath = require("../../../../images/avatars/" +
    user.avatar +
    ".png");

  return (
    <div className="personalInfo">
      <img src={imagePath.default} alt="Profile" />
      <div className="data">
        <h2>
          {user.nick}
        </h2>
        <AdditionalData />
        <button className="btn btn-outline-primary" onClick={() => history.push("/profile/update")}><i className="fa fa-pencil"/> Edit</button>
      </div>
    </div>
  );
};

export default PersonalInfo;
