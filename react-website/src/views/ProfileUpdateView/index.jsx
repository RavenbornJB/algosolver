import React from "react";
import ProfileUpdateMain from "../../modules/ProfileUpdate/components/ProfileUpdateMain";
import Header from "../../modules/Common/components/Header";
import Footer from "../../modules/Common/components/Footer";

class ProfileUpdateView extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <ProfileUpdateMain />
        <Footer/>
      </div>
    );
  }
}

export default ProfileUpdateView;
