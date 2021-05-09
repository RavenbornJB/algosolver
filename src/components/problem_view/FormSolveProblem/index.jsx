import React from 'react';
import {Redirect} from "react-router-dom";
import ErrorMessage from "../../common/ErrorMessage";
import FormField from "../../common/FormField";
import styles from './styles.css';



class FormSolveProblem extends React.Component {
    file_p = {
        field_id: "file_inp",
        type: "file"
    };

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
                submit_res: <ErrorMessage>Something went wrong with uploading the file</ErrorMessage>
            });
        } else {
            // TODO get the info from the form
            //  process the solution
            this.setState({
                submit_res: <Redirect to={this.props.redirect_to}/>
            });
        }

    }
    render() {
        return <div>
            <div>

                <form onSubmit={this.submitHandler}>
                    <FormField field_id={this.file_p.field_id}
                                    type={this.file_p.type}/>
                    <FormField field_id="submit" type="submit"/>
                </form>
            </div>
            {this.state.submit_res}
        </div>;
    }
}


export default FormSolveProblem;
