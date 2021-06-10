import React from "react";
import ProfileMain from "../../modules/Profile/components/ProfileMain";
import Header from "../../modules/Common/components/Header";
import Footer from "../../modules/Common/components/Footer";

class ProfileView extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <ProfileMain />
        <Footer/>
      </div>
    );
  }
}

export default ProfileView;
