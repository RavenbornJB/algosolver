import React from 'react';
import LoginMain from "../../components/auth/LoginMain";
import LoginHeader from "../../components/auth/LoginHeader";
import Footer from "../../components/common/Footer";


class LoginView extends React.Component {
    render() {
        return <div>
                    <LoginHeader/>
                    <LoginMain/>
                    <Footer/>
               </div>;
    }
}


export default LoginView;
