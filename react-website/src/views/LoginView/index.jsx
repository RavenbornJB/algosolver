import React from 'react';
import LoginMain from "../../modules/Auth/components/LoginMain";
import LoginHeader from "../../modules/Auth/components/LoginHeader";
import Footer from "../../modules/Common/components/Footer";


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
