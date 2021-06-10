import React from 'react';
import ProblemTable from "../ProblemTable";
import "./styles.scss"


class ProblemListForm extends React.Component {
    render() {
        return (
            <main className="problem-list-main">
                <ProblemTable/>
            </main>
        );

    }
}

export default ProblemListForm;
