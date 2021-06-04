import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import ProblemListView from "../views/ProblemListView";
import ProblemView from "../views/ProblemView";
import CreateView from "../views/CreateView";
import ProfileView from "../views/ProfileView";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import ProfileUpdateView from '../views/ProfileUpdateView';

import SafeRoute from "../modules/Common/components/SafeRoute";



const App = () => {
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
                    <SafeRoute exact path="/profile/update" component={ProfileUpdateView}/>
                    <SafeRoute path="*">
                        <Redirect to="/problemlist"/>
                    </SafeRoute>
                </Switch>
            </Router>
        </div>
        );
}


export default App;
