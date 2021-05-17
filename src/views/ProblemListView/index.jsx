import React from 'react';
import ProblemListForm from "../../components/problem_list/ProblemListForm";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";


class ProblemListView extends React.Component {
    render() {
        return (
            <div>
                <ProblemListForm/>
            </div>
        );
    }
}

export default ProblemListView;
