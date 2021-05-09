import React from "react";
import Emoji from "react-emoji-render";

class PersonalInfo extends React.Component {
  render() {
    const imageName = require("../../../images/profile-pictures/" +
      this.props.username +
      ".png");
    return (
      <div className="main-info">
        <img
          src={imageName.default}
          alt="Profile"
          height="200px"
          width="200px"
        />
        <h2>{this.props.username}</h2>
        <p>
          <Emoji text="Country: Ukraine🇺🇦" />
          <br />
          Born: 06.02.2003<br />
          Email: mr_kappa69xxx@rocketmail.com
        </p>
      </div>
    );
  }
}

export default PersonalInfo;
