import React, {Component} from 'react';
import Header from '../Header';
import StatsInfo from '../StatsInfo';
import FourStepsInfo from '../FourStepsInfo';
import AboutUs from '../AboutUs';
import ChantriesList from '../ChantriesList';
import Contact from '../Contact';

class LandingPage extends Component {

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

export default LandingPage;
