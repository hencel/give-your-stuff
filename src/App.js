import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import LandingPage from './LandingPage';
import LoggedPage from './LoggedUser';


class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: false
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/give-stuff' render={() => this.state.logged ? <LoggedPage /> : <LandingPage />} />
        </Switch>
      </Router>
    )
  }
}

export default App;
