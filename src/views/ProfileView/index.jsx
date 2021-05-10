import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import ProfileMain from "../../components/profile/ProfileMain";

class ProfileView extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ProfileMain />
        <Footer />
      </div>
    );
  }
}

export default ProfileView;
