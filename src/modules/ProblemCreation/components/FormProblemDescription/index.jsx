import React, {useState, useContext} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ErrorMessage from "../../../Common/components/ErrorMessage";
import {Redirect, useHistory} from "react-router-dom";
import './styles.scss';
import SubmitButton from "../../../Common/components/SubmitButton";

import TestsSection from "../TestsSection";
import {useSelector} from "react-redux";
import {selectUser} from "../../../redux/AuthReducer";
import {setProblemState} from "../../../redux/ProblemsReducer";


const FormProblemDescription = (props) => {

    const user = useSelector(selectUser);

    const [error, setError] = useState(<div/>);

    const [name, setName] = useState("");

    const [description, setDescription] = useState("");


    const [tests, setTests] = useState([{input: "", output: ""}])

    const history = useHistory();



    const submitHandler = (event) => {
        event.preventDefault();
        let formData = new FormData();

        formData.append('email', user.email);
        formData.append('password', user.password);

        formData.append("name", name);

        formData.append("description", description);

        for (let test of tests) {
            formData.append(test.input, test.output);
        }




        fetch("http://127.0.0.1:5000/add_problem", {
            body: formData,
            method: "POST",
        }).then(response => response.json()).then(json => {
            if (json.success) {
                history.push("/problemlist");
            }
            else {
                setError(<ErrorMessage>User with given email already exists </ErrorMessage>)
            }
        });

    }



    return (
        <div>
            <div className="create-form border">
                <h1>
                    Create problem
                </h1>
                <form onSubmit={submitHandler} >
                    <div className="mb-3">
                        <input
                            onChange={(event => setName(event.target.value))}
                            className="form-control"
                            id="briefDesc"
                            type="text"
                            placeholder="Problem name"
                        />
                    </div>
                    <h3 className="createHeading">Description</h3>
                    <CKEditor
                        editor={ ClassicEditor }
                        onChange={ ( event, editor ) => setDescription(editor.getData())}
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
