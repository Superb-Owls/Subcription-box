import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/landingpage/"
import LoginSignUp from "./pages/loginorsignup"
import PersonalizedHomePage from "./pages/personalizedhomepage"
import PrivacyPolicy from "./pages/privacypolicy"
import Purchase from "./pages/purchase"
import Navbar from './components/Navbar'
import Tiers from "./pages/tiers"
import About from './pages/about'




function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/LoginOrSignUp" component={LoginSignUp} />
          <Route exact path="/Personalized" component={PersonalizedHomePage} />
          <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
          <Route exact path="/Purchase" component={Purchase} />
          <Route exact path="/Tiers" component={Tiers} />
          <Route exact path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
