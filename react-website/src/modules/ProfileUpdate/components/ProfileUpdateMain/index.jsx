import React from "react";
import PasswordInputs from "../PasswordInputs";
import UsernameInputs from "../UsernameInputs";
import CountryInputs from "../CountryInputs";
import BirthdateInputs from "../BirthdateInputs";
import BackToProfileButton from "../BackToProfileButton";

import './styles.scss';

const ProfileUpdateMain = () => {
  return (
    <div className="profileUpdate border">
      <h2>Update info</h2>
      <hr />
      <UsernameInputs />
      <hr />
      <PasswordInputs />
      <hr />
      <CountryInputs />
      <hr />
      <BirthdateInputs />
      <hr />
      <BackToProfileButton />
    </div>
  );
};

export default ProfileUpdateMain;
