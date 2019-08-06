import React, {Component} from 'react';
import { Link} from 'react-scroll';
const options = {
  activeClass: "active", 
  smooth: true, 
  duration: 500
}

class MenuPanel extends Component {
  render() {
    return (
      <ul className={'navBar'}>
        <li>Start</li>
        <li><Link to="StatsInfo" {...options}>O co chodzi?</Link></li>
        <li><Link to="AboutUs" {...options}>O nas</Link></li>
        <li><Link to="ChantriesList" {...options}>Fundacje i organizacje</Link></li>
        <li><Link to="Contact" {...options}>Kontakt</Link></li>
      </ul>
    )
  }
}
export default MenuPanel;