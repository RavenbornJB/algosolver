import React, {useState} from 'react';
import './styles.scss';
import FormField from '../FormField'
import ErrorMessage from "../ErrorMessage";
import SubmitButton from "../SubmitButton";

const AbstractForm = (props) => {
    let initialState = {}
    props.fields.forEach((field) => {
        initialState[field.field_id] = "";
    });


    const [state, setState] = useState(initialState);

    const handleChange = (event) => {
        setState( prevState => {
            let newState = {...prevState};
            newState[event.target.id] =  event.target.value;
            return newState;
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(state);

    }
    return (
        <div className="login-form border">
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
