import ProblemsContext from "../GlobalContexts";
import {Component} from "react";

class ProblemsProvider extends Component{
    // TODO redo initial state
    state = {
        problems:{

        }
    }
    // example of a problem
    // {id: 356,
    // totalLikes: 0,
    // totalRank: 1,
    // solvedNum: 10,
    // name: 'Sum two numbers'}
    addProblem(problem){
        this.setState({problems: {...this.state.problems, problem}})}

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