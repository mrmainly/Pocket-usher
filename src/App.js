import './App.css';
import HomePage from './pages/home/homePage'
import About from './pages/about/index'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
