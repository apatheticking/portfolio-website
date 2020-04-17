import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { 
  HomePage,
  Resume,
  Projects,
  ContactMe,
  Error
} from './components/views/index'
import './App.css';

function App() {
  return (
    <div className="App">
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
