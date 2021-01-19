import './App.css';
import NavBar from './component/NavBar';
import Header from "./component/Header"
import Footer from "./component/Footer"
import Home from './component/Home';
function App() {
  return (
    <div className="App">
      <NavBar/>
  <Header />
  <Home/>
  <Footer/>
    </div>
  );
}

export default App;
