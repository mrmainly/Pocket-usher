import './App.css';
import HomePage from './pages/home/homePage'
import About from './pages/about/index'
import Team from './pages/team/index'
import Blog from './pages/blog/index'
import Interactions from './pages/interactions/index'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/blog" component={Blog} />
        <Route path="/interactions" component={Interactions} />
      </Switch>
    </Router>
  );
}

export default App;
