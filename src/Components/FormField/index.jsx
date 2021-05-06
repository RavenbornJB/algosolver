import React from 'react';
import styles from './styles.css';

class FormField extends React.Component {
    render() {
        return <div className={styles.field}>
                    <label htmlFor={this.props.field_id}>{this.props.text}</label>
                    <input id={this.props.field_id} name={this.props.field_id}/>
               </div>;
    }
}


export default FormField;
