import React, {useState} from 'react';
import FieldProblemDescription from "../../modules/ProblemView/components/FieldProblemDescription";
import FormSolveProblem from "../../modules/ProblemView/components/FormSolveProblem";
import "./styles.scss"
import Header from "../../modules/Common/components/Header";
import Footer from "../../modules/Common/components/Footer";
import {getProblems} from "../../modules/redux/ProblemsReducer"
import ErrorMessage from "../../modules/Common/components/ErrorMessage";


const ProblemView = (props) => {
    const [name, setName] = useState("Sum two numbers")
    const [description, setDescription] = useState("<code><strong>You are required to sum two number.</strong><br>You are given two integers a, b and need to return a + b <br> Example:<br><strong>Input: </strong>0 1<br><strong>Output: </strong>1</code>");
    const [error, setError] = useState("");
    let problemId = props.match.params.problemId;
    const getProblem = async (i) => {
        const table = await getProblems()
        for (let problem of table) {
            if (problem.id.toString() === problemId) {
                return problem;
            }
        }
        return null;
    }
    getProblem().then(problem => {
        if (!problem) {
            setError("The problem with given id doesn't exist")
        }
        setDescription(problem.description);
        setName(problem.name);
    })
    // TODO process with db to get info about problems -> render
    return (
        <div>
            <Header/>
            <main className="border solve-page">
                {error !== "" ? <ErrorMessage>{error}</ErrorMessage> :
                    <div>
                        <FieldProblemDescription
                            name={name}
                            description={description}
                        />
                        <hr/>
                        <FormSolveProblem/>
                    </div>
                }
            </main>
            <Footer/>
        </div>
    );
}



export default ProblemView;
