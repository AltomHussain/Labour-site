import './App.css';
import NavBar from './component/NavBar';
import Header from "./component/Header"
import Footer from "./component/Footer"
import Home from './component/Home';
import {BrowserRouter as Router, Route, Switch, Link}  from "react-router-dom"
import JoinLabourPage from './component/JoinLabourPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/join-labour" component={JoinLabourPage} />
      </Switch>
    </Router>
 
  );
}

export default App;
