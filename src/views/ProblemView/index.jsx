import React from 'react';
import FieldProblemDescription from "../../components/problem_view/FieldProblemDescription";
import FieldCodeEditor from "../../components/problem_view/FieldCodeEditor";
import FormSolveProblem from "../../components/problem_view/FormSolveProblem";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";


class ProblemView extends React.Component {
    temp_full_data = "<p><strong>Sum two numbers.</strong></p><p>You have given two integers a, b &lt; 100</p><p><strong>input</strong>:</p><p>0 1</p><p><strong>output</strong>:</p><p>1</p>";
    temp_brief_data = "Sum two numbers";
    render() {
        let problemId = this.props.match.params.problemId;
        // TODO process with db to get info about problems -> render
        return <div>
            <Header/>
            <FieldProblemDescription
                brief_description={this.temp_brief_data}
                full_description={this.temp_full_data}/>
            <FieldCodeEditor/>
            {/*TODO make a redirect_to*/}
            <FormSolveProblem redirect_to={this.props.redirect_to}/>
            <Footer/>
        </div>
    }
}



export default ProblemView;
