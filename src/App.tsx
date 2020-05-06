import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { FourCornerNav } from 'components/nav/index'
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
      <FourCornerNav />
      <Switch>
        <Route component={HomePage} path="/" exact />
        
        {/* i'll be replacing these links soon */}
        <Route component={Resume} path="/resume" />
        <Route component={ContactMe} path="/contactme" />
        
        <Route component={Projects} path="/projects" />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
