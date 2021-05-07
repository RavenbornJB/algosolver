import React from 'react';
import LoginMain from "../../components/auth/LoginMain";
import LoginHeader from "../../components/auth/LoginHeader";
import LoginFooter from "../../components/auth/LoginFooter";


class LoginView extends React.Component {
    render() {
        return <div>
                    <LoginHeader/>
                    <LoginMain/>
                    <LoginFooter/>
               </div>;
    }
}


export default LoginView;
