import React, {Component} from 'react';
import Header from '../Header';

import Contact from '../Contact';

class LoggedPage extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />

        <Contact />
      </React.Fragment>
    )
  }
}

export default LoggedPage;
