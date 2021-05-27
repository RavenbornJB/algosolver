import React from 'react';
import FieldProblemDescription from "../../modules/ProblemView/components/FieldProblemDescription";
import FormSolveProblem from "../../modules/ProblemView/components/FormSolveProblem";
import "./styles.scss"
import Header from "../../modules/Common/components/Header";
import Footer from "../../modules/Common/components/Footer";


class ProblemView extends React.Component {
    temp_full_data = "<code><strong>You are required to sum two number.</strong><br>You are given two integers a, b and need to return a + b <br> Example:<br><strong>Input: </strong>0 1<br><strong>Output: </strong>1</code>";
    temp_brief_data = "Sum two numbers";
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
                <Footer/>
            </div>);
    }
}



export default ProblemView;
