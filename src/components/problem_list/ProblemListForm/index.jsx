import React from 'react';
import ProblemTable from "../ProblemTable";
import { Button } from 'react-bootstrap'


class ProblemListForm extends React.Component {
    render() {
        return <main>
            <ProblemTable/>
            <div>
                <Button href="/create">Add problem</Button>
            </div>
        </main>;

    }
}

export default ProblemListForm;
