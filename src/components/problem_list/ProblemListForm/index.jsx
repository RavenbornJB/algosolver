import React from 'react';
import ProblemTable from "../ProblemTable";


class ProblemListForm extends React.Component {
    render() {
        return <main>
            <ProblemTable/>
            <div>
                <a href="/create">Add problem</a>
            </div>
        </main>;

    }
}

export default ProblemListForm;
