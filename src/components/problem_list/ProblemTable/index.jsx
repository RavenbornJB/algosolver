import React, { Component } from 'react'
import './styles.scss'

class ProblemTable extends Component {
    renderTableHeader() {
        let header = Object.keys(this.state.problems[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.problems.map((problem, index) => {
            const { id, name, solved_by, rank } = problem //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
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
                { id: 1, name: 'Boy next door', solved_by: 21, rank: 4 },
                { id: 2, name: 'Dungeon master', solved_by: 19, rank: 22 },
                { id: 3, name: 'Slave', solved_by: 16, rank: 9 },
                { id: 4, name: 'Filthy finger', solved_by: 25, rank: 15 }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1 id='gay'>Gachi Problems</h1>
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