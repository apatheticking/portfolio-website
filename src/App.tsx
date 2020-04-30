import React from 'react'
import { FourCornerNav } from 'components/nav/index'
import { Switch, Route } from 'react-router-dom'
import { 
  HomePage,
  Resume,
  Projects,
  ContactMe,
  Error
} from './components/views/index'
import './App.css';

import { navbarStyle } from 'components/styles/index'

function App() {
  return (
    <div className="App">
      {/* <NavBar linkTo={'resume'} linkName={'Resume'} linkStyle={navbarStyle}/> */}
      <FourCornerNav />
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={Resume} path="/resume" />
        <Route component={ContactMe} path="/contactme" />
        <Route component={Projects} path="/projects" />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
