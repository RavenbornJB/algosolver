import React,  {useEffect} from 'react'
import {Link} from 'react-router-dom';
import './styles.scss'

import {useDispatch, useSelector} from "react-redux";
import {fetchTable, selectProblemTable} from "../../../redux/ProblemsReducer";


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
                    <td>{problem.solved}</td>
                    <td>{problem.rank}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

const ProblemTable = (props) => {

    const table = useSelector(selectProblemTable);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTable());
    }, []);

    return (
        <div id="problems">
            <PrTable
                problems={table}
            />
        </div>
    );
};

export default ProblemTable
