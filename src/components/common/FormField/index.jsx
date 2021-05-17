import React from 'react';

const FormField = (props) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.item.field_id}>{props.item.text}</label>
            <input onChange={props.onChange} className="form-control" id={props.item.field_id} type={props.item.type} placeholder={props.item.placeholder}/>
        </div>
    );

}


export default FormField;
