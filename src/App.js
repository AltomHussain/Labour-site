import "./App.css";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomeJoin from "./component/joinLabour/HomeJoin";
import DonateParty from "./component/donate/DonateParty";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/join-labour" component={HomeJoin} />
        <Route exact path="/donate-party" component={DonateParty} />
      </Switch>
    </Router>
  );
}

export default App;
