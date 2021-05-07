import React from 'react';


class ErrorMessage extends React.Component {
    render() {
        console.log(this.props)
        return <div>
                    <h2>{this.props.children}</h2>
                </div>;
    }
}


export default ErrorMessage;
