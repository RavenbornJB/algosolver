import React from 'react';
import {Button} from "react-bootstrap";

import './styles.scss';

const TestsSection = (props) => {

    const tests = props.tests;
    const setTests = props.setTests;


    const addTest = (event) => {
        setTests([...tests, {input: "", output: ""}]);
    }

    const deleteTest = (index) => {
        setTests([...tests.slice(0, tests.length - 1)]);
    }

    const changeTest = (type, index, event) => {
        let newTests = [...tests];
        newTests[index][type] = event.target.value;
        setTests(newTests);
    }


    return (
        <div>
            <h3 className="createHeading">Tests</h3>
            <div>
                {tests.map((test, index) => (
                    <div className="testField form-row" key={"test" + index}>
                        <div className="col">
                            <input
                                className="form-control"
                                onChange={event => changeTest("input", index, event)}
                                id={"testInput" + index}
                                type="text"
                                placeholder={"Test " + index + " input"}
                            />
                        </div>
                        <div className="col">
                            <input
                                className="form-control"
                                onChange={event => changeTest("output", index, event)}
                                id={"testOutput" + index}
                                type="text"
                                placeholder={"Test " + index + " output"}
                            />
                        </div>
                    </div>
                    )
                )}
            </div>
            <div>
                <Button className="testButton btn btn-secondary" onClick={addTest}>Add test</Button>
                <Button className="testButton btn btn-secondary" onClick={deleteTest}>Delete test</Button>
            </div>
        </div>
    );
}


export default TestsSection;
