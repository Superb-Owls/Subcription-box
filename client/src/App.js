import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //Redirect, withRouter, useHistory(unused,deleted by Z)
import Home from "./pages/landingpage/"
import PersonalizedHomePage from "./pages/personalizedhomepage"
import PrivacyPolicy from "./pages/privacypolicy"
import Purchase from "./pages/purchase"
import Test from './pages/Test/Test'
import Navbar from './components/Navbar'
import Tiers from "./pages/tiers"
import About from './pages/about'
import Login from './pages/login'
import Register from './pages/register'
import LoginContext from './utils/loginContext';
import axios from 'axios'




function App() {
  const [selectedHero, setHero ] = useState({comicsToBuy: []})
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isAuth, setIsAuth] = useState(false)
  let isAuthenticated = ''

  function handleRegisterSubmit(newName, email, password, cb) {
    setUsername(newName);
    setEmail(email);
    setPassword(password);
    axios.post('api/register', { name: newName, email: email, password: password })
      .then((response) => {
        if (response.status === 200) {
          console.log(username, email, password)
          var target = "login"
          cb(target)
        }
      })
  }

  function handleLoginSubmit(logEmail, logPassword, call) {
    setEmail(logEmail);
    setPassword(logPassword);
    
    axios.post('api/login', {email: logEmail, password: logPassword})
    .then((response)=>{
      if(response.status === 200){
        // setIsAuth(true)
        var target = ""
       call(target)
       isAuthenticated = true
      } 
      
    })
  }
  return (
    <>
    <LoginContext.Provider value={{username, handleRegisterSubmit, handleLoginSubmit, isAuthenticated}}>
    <Router>
      <div>
        <Navbar selectedHero={selectedHero}></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Personalized" component={PersonalizedHomePage} />
          <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
          {/* <Route exact path="/Purchase" component={Purchase} /> */}
          <Route exact path="/Purchase" render={(props) => <Purchase {...props} setHero={setHero} selectedHero={selectedHero}/>} />
          <Route exact path="/Test" component={Test} />

          <Route exact path="/Tiers" render={(props) => <Tiers {...props} setHero={setHero} selectedHero={selectedHero}/>} />
          <Route exact path="/About" component={About} />
        </Switch>
      </div>
    </Router>
    </LoginContext.Provider>
    </>
  )
}

export default App;
