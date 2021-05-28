import React, {useState} from 'react';
import './styles.scss';
import FormField from '../FormField'
import SubmitButton from "../SubmitButton";

const AbstractForm = (props) => {
    let initialState = {}
    props.fields.forEach((field) => {
        initialState[field.field_id] = "";
    })


    const [state, setState] = useState(initialState);

    const handleChange = (event) => {
        setState(  {...state, [event.target.id]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(state);

    }
    return (
        <div className="abstract-form border">
            <h2>{props.title}</h2>
            <hr/>
            <form onSubmit={handleSubmit} className="form-floating">
                {
                    props.fields.map(
                        item => <FormField onChange={handleChange} key={item.field_id} item={item}/>
                        )
                }
                <SubmitButton/>
            </form>
        </div>
    );
}


export default AbstractForm;
