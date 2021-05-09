import React from 'react';
import styles from './styles.css';
import FormField from '../FormField'
import ErrorMessage from "../ErrorMessage";
import {Redirect} from "react-router-dom";

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
                    <div>
                        <form onSubmit={this.submitHandler}>
                            {
                                this.props.fields.map(
                                item => <FormField field_id={item.field_id} type={item.type}>{item.text}</FormField>
                                )
                            }
                            <FormField field_id="submit" type="submit"/>
                        </form>
                    </div>
                    {this.state.submit_res}
                </div>;
    }
}


export default AbstractForm;
