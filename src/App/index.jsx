import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ProblemListView from "../views/ProblemListView";
import ProblemView from "../views/ProblemView";
import CreateView from "../views/CreateView";
import ProfileView from "../views/ProfileView";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";


class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Router>
                    <Switch>
                        <Route exact path="/problemlist" component={ProblemListView}/>
                        <Route exact path="/viewproblem/:problemId" component={ProblemView}/>
                        <Route exact path="/create" component={CreateView}/>
                        <Route exact path="/profile" component={ProfileView}/>
                        <Route path="*" >
                            <Redirect to="/problemlist"/>
                        </Route>
                    </Switch>
                </Router>
                <Footer/>
            </div>

        );
    }
}


export default App;
