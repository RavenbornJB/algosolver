import React from 'react';
import RegisterMain from "../../components/auth/RegisterMain";
import LoginHeader from "../../components/auth/LoginHeader";
import LoginFooter from "../../components/auth/LoginFooter";


class RegisterView extends React.Component {
    render() {
        return <div>
            <LoginHeader/>
            <RegisterMain/>
            <LoginFooter/>
        </div>;
    }
}


export default RegisterView;
