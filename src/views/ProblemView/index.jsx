import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";

import "./styles.scss"

import FieldProblemDescription from "../../modules/ProblemView/components/FieldProblemDescription";
import FormSolveProblem from "../../modules/ProblemView/components/FormSolveProblem";
import Header from "../../modules/Common/components/Header";
import Footer from "../../modules/Common/components/Footer";
import ErrorMessage from "../../modules/Common/components/ErrorMessage";
import DeleteButton from "../../modules/ProblemView/components/DeleteButton";
import {selectUser} from "../../modules/redux/AuthReducer";


const ProblemView = (props) => {
    const [name, setName] = useState("")
    const [author, setAuthor] = useState(false)
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const problemId = props.match.params.problemId;

    const user = useSelector(selectUser);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/get_problem?id=" + problemId , {
            method: "GET",
        }).then(response => response.json()).then(json => {
            if (json.success) {
                setName(json.problem.name);
                setDescription(json.problem.description);
                if (json.problem.author.toString() === user.id.toString()) {
                    setAuthor(true);
                }
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
                        <DeleteButton isAuthor={author} problemId={problemId} />
                    </div>
                }
            </main>
            <Footer/>
        </div>
    );
}



export default ProblemView;
