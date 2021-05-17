import ProblemsContext from "../GlobalContexts";
import {Component} from "react";

class ProblemsProvider extends Component{
    // TODO redo initial state
    state = {
        problems:{
            1: {
                totalLikes: 0,
                totalRank: 1,
                solvedNum: 10
            }

        }
    }
    addProblem(id, problem){
        this.setState({problems: {id: problem}})}

    render(){
        return (
            <ProblemsContext.Provider

                value={{problems: this.state.problems,
                addProblem: this.addProblem.bind(this)}}>
                {this.props.children}
            </ProblemsContext.Provider>
        );
    }
}

export default ProblemsProvider;