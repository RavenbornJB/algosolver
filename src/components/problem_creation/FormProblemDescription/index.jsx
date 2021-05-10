import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ErrorMessage from "../../common/ErrorMessage";
import {Redirect} from "react-router-dom";
import FormField from "../../common/FormField"
import styles from './styles.scss';



class FormProblemDescription extends React.Component {
    brief_info_p = {
        field_id: "brief_info_input",
        text: "Brief info about the problem",
        type: "text"
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
                submit_res: <ErrorMessage>Something went wrong with creating a problem</ErrorMessage>
            });
        } else {
            // TODO get the info from the form
            //  add the problem description to db
            this.setState({
                submit_res: <Redirect to={this.props.redirect_to}/>
            });
        }

    }
    render() {
        return <div>
                    <div>

                        <form onSubmit={this.submitHandler}>
                            <FormField field_id={this.brief_info_p.field_id}
                                       type={this.brief_info_p.type}>{this.brief_info_p.text}</FormField>

                            <CKEditor
                                editor={ ClassicEditor }
                                config={ {
                                    ckfinder: {
                                        // TODO supporting images
                                        uploadUrl: 'my_server_url'
                                    }
                                } }

                                // TODO possibly can be useful
                                // data="<p>Hello from CKEditor 5!</p>"
                                // onReady={ editor => {
                                //     console.log( 'Editor is ready to use!', editor );
                                // } }

                                onChange={ ( event, editor ) => {
                                // TODO setState of editor data to get the data
                                    const data = editor.getData();
                                    console.log( { event, editor, data } );
                                } }

                                // onBlur={ ( event, editor ) => {
                                //     console.log( 'Blur.', editor );
                                // } }
                                // onFocus={ ( event, editor ) => {
                                //     console.log( 'Focus.', editor );
                                // } }
                            />

                            <FormField field_id="submit" type="submit"/>
                        </form>
                    </div>
                    {this.state.submit_res}
                </div>;
    }
}


export default FormProblemDescription;
