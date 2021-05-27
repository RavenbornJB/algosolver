import React, {useState} from 'react';
import ErrorMessage from "../../../Common/components/ErrorMessage";
import SubmitButton from "../../../Common/components/SubmitButton";



const FormSolveProblem = (props) => {
    const [state, setState] = useState({"file": null, submit_res: <div/>});

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
            formData.append('3', "You typed: 3\n");


            fetch("http://makspro.pythonanywhere.com/interpreter", {
                body: formData,
                method: "POST",
            }).then(response => response.json()).then(json => console.log(json));
            console.log(1);


            //let request = new XMLHttpRequest();
            //request.onreadystatechange = () => {
            //    console.log(request.responseText);
            //}
            //request.open("POST", "http://127.0.0.1:5000/uploader", true);
            //request.setRequestHeader("Content-Type","multipart/form-data");
            //request.send(formData);
            //console.log("sent");
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
