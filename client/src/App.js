import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/LandingPage"
// import LoginSignUp from "./pages/LoginOrSignup"
// import PersonalizedHomePage from "./pages/PersonalizedHomepage"
// import PrivacyPolicy from "./pages/PrivacyPolicy"
// import Purchase from "./pages/Purchase"
// import Sitemap from "./pages/Sitemap"
// import Tiers from "./pages/tiers"
import Test from "../src/pages/Test/Test"


function App() {
  return (
      <>
      <Test/>
      </>

    // <Router>
    //   <div>
    //     <Nav />
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/LoginOrSignUp" component={LoginSignUp} />
    //       <Route exact path="/Personalized" component={PersonalizedHomePage} />
    //       <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
    //       <Route exact path="/Purchase" component={Purchase} />
    //       <Route exact path="/Sitemap" component={Sitemap} />
    //       <Route exact path="/Tiers" component={Tiers} />
    //       <Route component={NoMatch} />
    //     </Switch>
    //   </div>
    // </Router>
  )
}

export default App;
