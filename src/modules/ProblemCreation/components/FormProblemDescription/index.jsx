import React, {useState, useContext} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ErrorMessage from "../../../Common/components/ErrorMessage";
import {Redirect, useHistory} from "react-router-dom";
import './styles.scss';
import SubmitButton from "../../../Common/components/SubmitButton";
import ProblemsContext from "../../../сontexts/GlobalContexts";
import {Button} from "react-bootstrap";
import TestsSection from "../TestsSection";


const FormProblemDescription = (props) => {

    const problemsContext = useContext(ProblemsContext);
    let [error, setError] = useState(<div/>);

    let [tests, setTests] = useState([{input: "", output: ""}])

    let history = useHistory();


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
                        <input className="form-control" id="briefDesc" type="text" placeholder="Problem name"/>
                    </div>
                    <h3 className="createHeading">Description</h3>
                    <CKEditor
                        editor={ ClassicEditor }

                        onChange={ ( event, editor ) => {
                            // TODO setState of editor data to get the data
                            const data = editor.getData();
                            console.log( { event, editor, data } );
                        } }
                    />

                    <TestsSection tests={tests} setTests={setTests}/>
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
