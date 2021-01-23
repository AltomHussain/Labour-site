import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link}  from "react-router-dom"
import JoinDetail from './JoinDetail';
import JoinLabourPage from './JoinLabourPage';

export default function HomeJoin() {
    return (
        <Router>
        <Switch>
          
          <Route exact path="/join-labour" component={JoinLabourPage} />
          <Route exact path="/join-detail" component={JoinDetail} />
        </Switch>
      </Router>
    )
}
