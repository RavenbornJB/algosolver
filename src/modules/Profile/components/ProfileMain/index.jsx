import React from "react";
import PersonalInfo from "../PersonalInfo";
import RankingInfo from "../RankingInfo";
import "./styles.scss";

class ProfileMain extends React.Component {
  render() {
    return (
      <main className="profile-main">
        <PersonalInfo />
        <RankingInfo />
      </main>
    );
  }
}

export default ProfileMain;
