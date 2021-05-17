import React from 'react';
import { LikeButton } from '@lyket/react';
// import ScriptTag from 'react-script-tag';
import FieldProblemDescription from "../../components/problem_view/FieldProblemDescription";
import FieldCodeEditor from "../../components/problem_view/FieldCodeEditor";
import FormSolveProblem from "../../components/problem_view/FormSolveProblem";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import "./styles.scss"


class ProblemView extends React.Component {
    temp_full_data = "<code><strong>You are required to sum two number.</strong><br>You are given two integers a, b and need to return a + b <br> Example:<br><strong>Input: </strong>0 1<br><strong>Output: </strong>1</code>";
    temp_brief_data = "Sum two numbers";

    componentDidMount() {
        const script = document.createElement("script");    script.async = true;    script.src = "./like.js";       document.body.appendChild(script);  }
    render() {
        let problemId = this.props.match.params.problemId;
        // TODO process with db to get info about problems -> render
        return (
            <div>
                <Header/>
                <main className="border solve-page">
                    <FieldProblemDescription
                        brief_description={this.temp_brief_data}
                        full_description={this.temp_full_data}/>
                    <hr/>
                    {/*<FieldCodeEditor/>*/}
                    {/*TODO make a redirect_to*/}
                    <FormSolveProblem redirect_to={this.props.redirect_to}/>
                </main>
                <div className="like-button">
                    <LikeButton
                        id="how-to-reduce-footprint"
                        namespace="post"
                    />
                </div>

                {/*<i onClick={(x) => x.classList.toggle('fa-thumbs-down')} className="fa fa-thumbs-up"/>*/}
                {/*<ScriptTag type="text/javascript" src="./like.js" />*/}

                <Footer/>
            </div>);
    }
}



export default ProblemView;
