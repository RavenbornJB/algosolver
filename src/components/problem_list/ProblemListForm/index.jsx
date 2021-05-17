import React from 'react';
import ProblemTable from "../ProblemTable";
import "./styles.scss"
import ProblemsContext from "../GlobalContexts";


class ProblemListForm extends React.Component {
    static contextType = ProblemsContext;
    render() {
        console.log(this.context.problems);
        return (
            <main className="problem-list-main">
                <ProblemTable/>
            </main>
        );

    }
}

export default ProblemListForm;
