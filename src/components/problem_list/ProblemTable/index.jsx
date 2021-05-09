import React, { Component } from 'react'

class ProblemTable extends Component {
    renderTableHeader() {
        let header = Object.keys(this.state.problems[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.problems.map((problem, index) => {
            const { id, name, solved_by } = problem //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{solved_by}</td>
                </tr>
            )
        })
    }

    constructor(props) {
        super(props)
        this.state = {
            problems: [
                { id: 1, name: 'A plus B', solved_by: 21 },
                { id: 2, name: 'Fill a Safe', solved_by: 19 },
                { id: 3, name: 'Green Tea', solved_by: 16 },
                { id: 4, name: 'The Great Tea Party', solved_by: 25 }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1 id='title'>Problem List</h1>
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