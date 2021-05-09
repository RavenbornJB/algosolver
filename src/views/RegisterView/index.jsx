import React from 'react';
import RegisterMain from "../../components/auth/RegisterMain";
import LoginHeader from "../../components/auth/LoginHeader";
import Footer from "../../components/common/Footer";


class RegisterView extends React.Component {
    render() {
        return <div>
            <LoginHeader/>
            <RegisterMain/>
            <Footer/>
        </div>;
    }
}


export default RegisterView;
