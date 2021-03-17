import "./App.css";
import Home from "./component/Home";
import TakeAction from "./component/TakeAction";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DonateParty from "./component/donate/DonateParty"
import HomeJoin from "./component/joinLabour/HomeJoin";
import Volunteers from "./component/Volunteers";
import JoinDetail from "../src/component/joinLabour/JoinDetail"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/join-labour" component={HomeJoin} />

        <Route exact path="/donate-party" component={DonateParty} />

        <Route exact path="/take-action" component={TakeAction} />
        <Route path="/volunteers" component={Volunteers} />
        <Route exact path="/join-detail" component={JoinDetail} />
      </Switch>
    </Router>
  );
}

export default App;
