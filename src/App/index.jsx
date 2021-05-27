import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ProblemListView from "../views/ProblemListView";
import ProblemView from "../views/ProblemView";
import CreateView from "../views/CreateView";
import ProfileView from "../views/ProfileView";
import Header from "../modules/Common/components/Header";
import Footer from "../modules/Common/components/Footer";
import {Provider, useSelector} from "react-redux";
import LoginStore, {selectUser} from "../modules/stores/LoginStore";
import SafeRoute from "../modules/Common/components/SafeRoute";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";


const App = () => {
    const user = useSelector(selectUser);

    const checkLogin = (nextState, replace) => {
        console.log(user);
        console.log(2);
        if (!user) {
            replace("/login");
        }
    }
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/login" component={LoginView}/>
                    <Route exact path="/register" component={RegisterView}/>
                    <SafeRoute exact path="/problemlist" component={ProblemListView}/>
                    <SafeRoute exact path="/viewproblem/:problemId" component={ProblemView}/>
                    <SafeRoute exact path="/create" component={CreateView}/>
                    <SafeRoute exact path="/profile" component={ProfileView}/>
                    <SafeRoute path="*">
                        <Redirect to="/problemlist"/>
                    </SafeRoute>
                </Switch>
            </Router>
        </div>
        );
}


export default App;
