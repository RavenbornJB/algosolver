import React from "react";
import "../RegisterRedirect/styles.scss";

class LoginRedirect extends React.Component {
    render() {
        return (
            <div className="redirect-link border">
                <p>Have an account? <a href="/">Log in</a> </p>
            </div>
        );

    }
}

export default LoginRedirect;
