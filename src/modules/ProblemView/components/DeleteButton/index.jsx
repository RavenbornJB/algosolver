import React from 'react';
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

import './styles.scss';
import {selectUser} from "../../../redux/AuthReducer";

const DeleteButton = (props) => {
    const history = useHistory();
    const user = useSelector(selectUser);
    const deleteProblemHandler = () => {
        let formData = new FormData();
        console.log(user.password)
        formData.append('email', user.email);
        formData.append('password', user.password);
        formData.append('id', props.problemId);


        fetch("http://127.0.0.1:5000/delete_problem", {
            body: formData,
            method: "POST",
        }).then(response => response.json()).then(json => {
            console.log(json)
            history.push("/problemlist")
        });

    }
    if (props.isAuthor) {
        return <Button
            className="w-100 btn btn-lg btn-danger deleteButton"
            onClick={deleteProblemHandler}
        >Delete problem</Button>;
    }

    return <div/>;
}


export default DeleteButton;
