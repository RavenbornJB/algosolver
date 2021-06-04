import React, { useState } from "react";

import FormField from '../FormField';
import UpdateButton from '../UpdateButton';

import './styles.scss';

const AbstractInputs = (props) => {
  let initialState = {};
  props.fields.forEach((field) => {
    initialState[field.field_id] = "";
  });


  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(state);

  };
  return (
    <div className="abstract-inputs">
      <form onSubmit={handleSubmit} className="form-floating">
        {props.fields.map((item) => (
          <FormField onChange={handleChange} key={item.field_id} item={item} />
        ))}
        <UpdateButton />
      </form>
    </div>
  );
};

export default AbstractInputs;
