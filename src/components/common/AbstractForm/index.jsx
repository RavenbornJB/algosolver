import React from 'react';
import './styles.scss';
import FormField from '../FormField'
import ErrorMessage from "../ErrorMessage";
import {Redirect} from "react-router-dom";
import SubmitButton from "../SubmitButton";

class AbstractForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submit_res: "",
        }
        this.submitHandler = this.submitHandler.bind(this);
    }
    submitHandler(event) {
        event.preventDefault();
        let test_var = false;
        if (test_var) {
            this.setState({
                submit_res: <ErrorMessage>Something went wrong</ErrorMessage>
            });
        } else {
            this.setState({
                submit_res: <Redirect to={this.props.redirect_to}/>
            });
        }

    }
    render() {
        return <div>
                    <div className="login-form border">
                        <h2>{this.props.title}</h2>
                        <hr/>
                        <form onSubmit={this.submitHandler} className="form-floating">
                            {
                                this.props.fields.map(
                                item => <FormField field_id={item.field_id} type={item.type} placeholder={item.placeholder}>{item.text}</FormField>
                                )
                            }
                            <SubmitButton/>
                        </form>
                    </div>
                    {this.state.submit_res}
                </div>;
    }
}


export default AbstractForm;
