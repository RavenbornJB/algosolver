import React from 'react';
import LoginForm from '../LoginForm'


class LoginMain extends React.Component {
    render() {
        return <main>
                    <LoginForm/>
                    <div>
                        <h2>Don't have an account?</h2>
                        <a href="/register">Sign Up</a>
                    </div>
                </main>;

    }
}

export default LoginMain;
