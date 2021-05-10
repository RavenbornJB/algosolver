import React from "react";
import PersonalInfo from "../PersonalInfo";
import RankingInfo from "../RankingInfo";

class ProfileMain extends React.Component {
  render() {
    return (
      <main>
        <PersonalInfo />
        <RankingInfo />
      </main>
    );
  }
}

export default ProfileMain;
