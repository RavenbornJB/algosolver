import React from 'react';
import RegisterForm from '../RegisterForm'


class RegisterMain extends React.Component {
    render() {
        return <main>
                    <RegisterForm/>
                    <div>
                        <h2>Have an account?</h2>
                    <a href="/">Log in</a>
                    </div>
              </main>;
    }
}


export default RegisterMain;
