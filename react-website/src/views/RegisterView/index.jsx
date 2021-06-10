import React from 'react';
import RegisterMain from "../../modules/Auth/components/RegisterMain";
import LoginHeader from "../../modules/Auth/components/LoginHeader";
import Footer from "../../modules/Common/components/Footer";


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
