import React from 'react';
import styles from './styles.css';

class FormField extends React.Component {
    render() {
        console.log(this.props)
        return <div>
                    <label htmlFor={this.props.field_id}>{this.props.children}</label>
                    <input id={this.props.field_id} type={this.props.type}/>
               </div>;
    }
}


export default FormField;
