import React from "react";
import "./styles.scss";

class RegisterRedirect extends React.Component {
    render() {
        return (
            <div className="redirect-link border">
                <p>Don't have an account? <a href="/register">Sign Up</a> </p>
            </div>
        );

    }
}

export default RegisterRedirect;
