import React from 'react';
import FormProblemDescription from "../../modules/ProblemCreation/components/FormProblemDescription";
import Header from "../../modules/Common/components/Header";
import Footer from "../../modules/Common/components/Footer";


class CreateView extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <FormProblemDescription/>
                <Footer/>
            </div>
        );
    }
}

export default CreateView;
