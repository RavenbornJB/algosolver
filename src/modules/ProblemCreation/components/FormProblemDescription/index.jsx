import React, {useState, useContext} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ErrorMessage from "../../../Common/components/ErrorMessage";
import {Redirect, useHistory} from "react-router-dom";
import './styles.scss';
import SubmitButton from "../../../Common/components/SubmitButton";
import ProblemsContext from "../../../Contexts/GlobalContexts";


const FormProblemDescription = (props) => {


    let [error, setError] = useState(<div/>);

    let history = useHistory();
    const problemsContext = useContext(ProblemsContext);

    const submitHandler = (event) => {
        event.preventDefault();
        let test_var = false;
        if (test_var) {
            setError(<ErrorMessage>Something went wrong with creating a problem</ErrorMessage>);
        } else {
            // TODO get the info from the form
            //  add the problem description to db
            history.push("/problemlist");

            problemsContext.addProblem({
                id: 356,
                totalLikes: 0,
                totalRank: 1,
                solvedNum: 10,
                name: 'Sum two numbers'
            });
        }

    }
    return (
        <div>
            <div className="create-form border">
                <h1>
                    Create problem
                </h1>
                <form onSubmit={submitHandler} >
                    <div className="mb-3">
                        <label htmlFor="briefDesc">Enter problem name:</label>
                        <input className="form-control" id="briefDesc" type="text" placeholder="Problem name"/>
                    </div>
                    <CKEditor
                        className="editor"
                        editor={ ClassicEditor }
                        config={ {
                            ckfinder: {
                                // TODO supporting images
                                uploadUrl: 'my_server_url'
                            }
                        }}

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
                    <div className="submit-button">
                        <SubmitButton/>
                    </div>
                </form>
            </div>
            {error}
        </div>
    );
}


export default FormProblemDescription;
