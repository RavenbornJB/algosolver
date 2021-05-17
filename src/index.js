import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from '@lyket/react';

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import CreateView from "./views/CreateView";
import LoginView from "./views/LoginView";
import ProblemListView from "./views/ProblemListView";
import ProfileView from "./views/ProfileView";
import ProblemView from "./views/ProblemView";
import RegisterView from "./views/RegisterView";
import ProblemsProvider from "../src/components/problem_list/ProblemsProvider"


ReactDOM.render(
  <React.StrictMode>
      <Provider apiKey="f5c42ff7b0cbf80280ec6ebe5f0c55">
          <ProblemsProvider>
              <Router>
                  <Switch>
                      <Route exact path="/login" component={LoginView}/>
                      <Route exact path="/problemlist" component={ProblemListView}/>
                      <Route exact path="/viewproblem/:problemId" component={ProblemView}/>
                      <Route exact path="/create" component={CreateView}/>
                      <Route exact path="/profile" component={ProfileView}/>
                      <Route exact path="/register" component={RegisterView}/>
                      <Route path="*">
                          <Redirect to="/login"/>
                      </Route>
                  </Switch>
              </Router>
          </ProblemsProvider>
      </Provider>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
