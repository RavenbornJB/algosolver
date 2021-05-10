import React from 'react';
import './styles.scss';


class ErrorMessage extends React.Component {
    render() {
        return <div className="alert alert-danger error">
                    <p>{this.props.children}</p>
                </div>;
    }
}


export default ErrorMessage;
