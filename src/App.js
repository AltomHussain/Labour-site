import "./App.css";
import Home from "./component/Home";
import TakeAction from "./component/TakeAction";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeJoin from "./component/joinLabour/HomeJoin";
import Volunteers from "./component/Volunteers";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/join-labour" component={HomeJoin} />
        <Route exact path="/take-action" component={TakeAction} />
        <Route path="/volunteers" component={Volunteers} />
      </Switch>
    </Router>
  );
}

export default App;
