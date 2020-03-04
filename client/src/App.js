import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/landingpage/"
import LoginSignUp from "./pages/loginorsignup"
import PersonalizedHomePage from "./pages/personalizedhomepage"
import PrivacyPolicy from "./pages/privacypolicy"
import Purchase from "./pages/purchase"
import Test from './pages/Test/Test'
import Navbar from './components/Navbar'
import Tiers from "./pages/tiers"
import About from './pages/about'


function App() {

  const [selectedHero, setHero ] = useState('')

  return (
    <Router>
      <div>
        <Navbar selectedHero={selectedHero}></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/LoginOrSignUp" component={LoginSignUp} />
          <Route exact path="/Personalized" component={PersonalizedHomePage} />
          <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
          <Route exact path="/Purchase" component={Purchase} />
          
          <Route exact path="/Test" component={Test} />

          <Route exact path="/Tiers" render={(props) => <Tiers {...props} setHero={setHero} />} />
          <Route exact path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
