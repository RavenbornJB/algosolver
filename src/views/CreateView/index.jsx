import React from 'react';
import FormProblemDescription from "../../components/problem_creation/FormProblemDescription";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";


class CreateView extends React.Component {
    render() {
        return (
            <div>
                <FormProblemDescription/>
            </div>
        );
    }
}

export default CreateView;
