import React from 'react';
import {Button} from "react-bootstrap";

const DeleteButton = (props) => {
    const deleteProblemHandler = () => {

    }
    if (props.isAuthor) {
        return <Button
            className={"w-100 btn btn-lg btn-danger"}
            id="submit"
            type="submit"
            onClick={deleteProblemHandler}
        />;
    }

    return <div/>;
}


export default DeleteButton;
