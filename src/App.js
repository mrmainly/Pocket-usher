import './App.css';
import HomePage from './pages/home/homePage'
import About from './pages/about/index'
import Team from './pages/team/index'
import Blog from './pages/blog/index'
import Interactions from './pages/interactions/index'
import Faq from './pages/faq/index'
import Auth from './pages/auth/index'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PrivacyPolicyPage from './pages/privacyPolicy/privacyPolicyPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/application" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/blog" component={Blog} />
        <Route path="/faq" component={Faq} />
        <Route path="/interactions" component={Interactions} />
        <Route path="/auth" component={Auth} />
        <Route path="/about/privacy" component={PrivacyPolicyPage} />
      </Switch>
    </Router>
  );
}

export default App;
