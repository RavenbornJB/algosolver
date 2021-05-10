import React from 'react';

class FormField extends React.Component {
    render() {
        return <div className="mb-3">
                    <label htmlFor={this.props.field_id}>{this.props.children}</label>
                    <input className="form-control" id={this.props.field_id} type={this.props.type} placeholder={this.props.placeholder}/>
               </div>;
    }
}


export default FormField;
