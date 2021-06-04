import React from 'react';
import ProblemListForm from "../../modules/ProblemList/components/ProblemListForm";
import Header from "../../modules/Common/components/Header";
import Footer from "../../modules/Common/components/Footer";

class ProblemListView extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <ProblemListForm/>
                <Footer/>
            </div>
        );
    }
}

export default ProblemListView;
