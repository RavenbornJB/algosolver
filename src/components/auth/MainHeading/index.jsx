import React from 'react';
import {MAIN_TITLE} from "../../../constants";
import "./styles.scss"


class MainHeading extends React.Component {
    render() {
        return (
            <div className="main-heading">
                <h1>{MAIN_TITLE}</h1>
                <hr/>
            </div>
        );
    }
}


export default MainHeading;
