import React, {useState, useEffect} from 'react';
import FieldProblemDescription from "../../modules/ProblemView/components/FieldProblemDescription";
import FormSolveProblem from "../../modules/ProblemView/components/FormSolveProblem";
import "./styles.scss"
import Header from "../../modules/Common/components/Header";
import Footer from "../../modules/Common/components/Footer";
import ErrorMessage from "../../modules/Common/components/ErrorMessage";
import {setProblemState} from "../../modules/redux/ProblemsReducer";
import DeleteButton from "../../modules/ProblemView/components/DeleteButton";


const ProblemView = (props) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const problemId = props.match.params.problemId;

    useEffect(() => {
        fetch("http://127.0.0.1:5000/get_problem?id=" + problemId , {
            method: "GET",
        }).then(response => response.json()).then(json => {
            if (json.success) {
                setName(json.problem.name);
                setDescription(json.problem.description);
            }
            else {
                setError("Problem doesn't exist")
            }
        });
    }, [problemId]);

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
                        <FormSolveProblem id={problemId}/>
                        <DeleteButton />
                    </div>
                }
            </main>
            <Footer/>
        </div>
    );
}



export default ProblemView;
