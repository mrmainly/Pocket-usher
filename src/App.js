import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home/homePage'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
