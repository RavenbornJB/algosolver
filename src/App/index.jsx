import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ProblemListView from "../views/ProblemListView";
import ProblemView from "../views/ProblemView";
import CreateView from "../views/CreateView";
import ProfileView from "../views/ProfileView";
import Header from "../modules/Common/components/Header";
import Footer from "../modules/Common/components/Footer";
import ProblemsProvider from "../modules/сontexts/ProblemsProvider";
import {useSelector} from "react-redux";
import {selectUser} from "../modules/stores/LoginStore";


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
            <ProblemsProvider>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/problemlist" component={ProblemListView} onEnter={checkLogin}/>
                        <Route exact path="/viewproblem/:problemId" component={ProblemView} onEnter={checkLogin}/>
                        <Route exact path="/create" component={CreateView} onEnter={checkLogin}/>
                        <Route exact path="/profile" component={ProfileView} onEnter={checkLogin}/>
                        <Route path="*" onEnter={checkLogin}>
                            <Redirect to="/problemlist"/>
                        </Route>
                    </Switch>
                </Router>
                <Footer/>
            </ProblemsProvider>
        </div>
        );
}


export default App;
