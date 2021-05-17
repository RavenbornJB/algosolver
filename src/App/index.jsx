import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ProblemListView from "../views/ProblemListView";
import ProblemView from "../views/ProblemView";
import CreateView from "../views/CreateView";
import ProfileView from "../views/ProfileView";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ProblemsProvider from "../components/contexts/ProblemsProvider";
import { Provider } from '@lyket/react';
import {LIKES_API_TOKEN} from "../confidential_info/constants";


class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <ProblemsProvider>
                    {/*Used for likes button in problem view*/}
                    <Provider apiKey={LIKES_API_TOKEN}>
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
                    </Provider>
                </ProblemsProvider>

                <Footer/>
            </div>

        );
    }
}


export default App;
