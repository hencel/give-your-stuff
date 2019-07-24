import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import StatsInfo from './StatsInfo';
import FourStepsInfo from './FourStepsInfo';
import AboutUs from './AboutUs';
import ChantriesList from './ChantriesList';
import Contact from './Contact';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <StatsInfo />
        <FourStepsInfo />
        <AboutUs />
        <ChantriesList />
        <Contact />
      </React.Fragment>
    )
  }
}

export default App;
