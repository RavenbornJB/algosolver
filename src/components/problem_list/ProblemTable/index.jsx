import React, {Component, useContext} from 'react'
import './styles.scss'
import ProblemsContext from "../../contexts/GlobalContexts";

class ProblemTable extends Component {
    static contextType = ProblemsContext;
    renderTableHeader() {
        console.log(this.context.problems);
        let header = Object.keys(this.state.problems[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        console.log(this.context.problems);
        return this.state.problems.map((problem, index) => {
            const { id, name, solved_by, rank } = problem //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td><a href={`/viewproblem/${id}`}>{name}</a></td>
                    <td>{solved_by}</td>
                    <td>{rank}</td>
                </tr>
            )
        })
    }

    constructor(props) {
        super(props)
        this.state = {
            problems: [
                { id: 1, name: 'Sum two numbers', solved_by: 21, rank: 4 },
                { id: 2, name: 'Multiply two numbers', solved_by: 19, rank: 22 },
                { id: 3, name: 'Happy primes', solved_by: 16, rank: 9 },
                { id: 4, name: 'To Go Or Not To Go?', solved_by: 25, rank: 15 }
            ]
        }
    }

    render() {
        return (
            <div>
                <table id='problems'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProblemTable
