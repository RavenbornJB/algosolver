import React, {Component, useContext} from 'react'
import {Link, NavLink } from 'react-router-dom';
import './styles.scss'

import ProblemsContext from "../../../сontexts/GlobalContexts";


const useSortableData = (problems, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedProblems = React.useMemo(() => {
        let sortableProblems = [...problems];
        if (sortConfig !== null) {
            sortableProblems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableProblems;
    }, [problems, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { problems: sortedProblems, requestSort, sortConfig };
};

const PrTable = (props) => {
    const { problems, requestSort, sortConfig } = useSortableData(props.problems);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>
                    <button
                        type="button"
                        onClick={() => requestSort('name')}
                        className={getClassNamesFor('name')}
                    >
                        Name
                    </button>
                </th>
                <th>
                    <button
                        type="button"
                        onClick={() => requestSort('solved_by')}
                        className={getClassNamesFor('solved_by')}
                    >
                        Solved by
                    </button>
                </th>
                <th>
                    <button
                        type="button"
                        onClick={() => requestSort('rank')}
                        className={getClassNamesFor('rank')}
                    >
                        Rank
                    </button>
                </th>
            </tr>
            </thead>
            <tbody>
            {problems.map((problem) => (
                <tr key={problem.id}>
                    <td>{problem.id}</td>
                    <td><Link to={`/viewproblem/${problem.id}`}>{problem.name}</Link></td>
                    <td>{problem.solved_by}</td>
                    <td>{problem.rank}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

class ProblemTable extends Component {
    static contextType = ProblemsContext;
    render() {
        return (
            <div id="problems">
                <PrTable
                    problems={[
                        { id: 1, name: 'Sum two numbers', solved_by: 21, rank: 4 },
                        { id: 2, name: 'Multiply two numbers', solved_by: 19, rank: 22 },
                        { id: 3, name: 'Happy primes', solved_by: 16, rank: 9 },
                        { id: 4, name: 'To Go Or Not To Go?', solved_by: 25, rank: 15 },
                        { id: 5, name: 'Where is my cake?', solved_by: 12, rank: 45 },
                        { id: 6, name: 'Jack and Jane', solved_by: 31, rank: 2 },
                        { id: 7, name: 'Funny mushrooms', solved_by: 9, rank: 30 },
                    ]}
                />
            </div>
        );
    };
};

export default ProblemTable