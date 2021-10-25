import './App.css';
import Login from "./components/Login";
import Home from "./components/Home";
import HomeSearch from "./components/HomeSearch";
import HomeDisplay from "./components/HomeDisplay";
import HomePageThree from "./components/HomePageThree";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
            <HomeSearch />
            <HomeDisplay />
            <HomePageThree />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
