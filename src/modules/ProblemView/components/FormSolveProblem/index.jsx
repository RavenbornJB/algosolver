import React, {useState} from 'react';
import {useSelector} from "react-redux";
import ErrorMessage from "../../../Common/components/ErrorMessage";
import SubmitButton from "../../../Common/components/SubmitButton";
import {selectUser} from "../../../redux/AuthReducer";
import {Button} from "react-bootstrap";



const FormSolveProblem = (props) => {
    const [state, setState] = useState({"file": null, submit_res: <div/>});

    const id = props.id;

    const user = useSelector(selectUser)

    const changeHandler = (event) => {
        setState({...state, file: event.target.files[0]});
        console.log(event.target.files[0].name);
    }




    const submitHandler = (event) => {
        event.preventDefault();
        if (!state.file) {
            setState({
                ...state,
                submit_res: <ErrorMessage>You must upload the file</ErrorMessage>
            });
        } else {
            let formData = new FormData();
            formData.append('file', state.file);
            formData.append('user_id', user.id.toString());
            formData.append('problem_id', id);


            fetch("http://127.0.0.1:5000/interpreter", {
                body: formData,
                method: "POST",
            }).then(response => response.json()).then(json => {
                console.log(json)
                if (!json.passed) {
                    setState({
                        ...state,
                        submit_res: <ErrorMessage>{json.failed}</ErrorMessage>
                    });
                }
            });

        }

    }
    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="file_inp"><h2>Send your solution:</h2></label>
                        <input type="file" className="form-control-file" id="file_inp" onChange={changeHandler}/>
                    </div>
                    <SubmitButton/>
                </form>
            </div>
            {state.submit_res}
        </div>
        );
}


export default FormSolveProblem;
