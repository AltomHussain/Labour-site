import './App.css';
import Home from './component/Home';
import TakeAction from './component/TakeAction';

import {BrowserRouter as Router, Route, Switch, Link}  from "react-router-dom"
import HomeJoin from './component/joinLabour/HomeJoin';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/join-labour" component={HomeJoin} />
        <Route exact path="/take-action" component={TakeAction} />

      </Switch>
    </Router>
 
  );
}

export default App;
