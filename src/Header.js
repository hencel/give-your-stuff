import React, {Component} from 'react';
import header_start_img from './images/header_start_img.jpg';


class Header extends Component {
  render() {
    return (
      <header>
        <div className={'headerImages'}>
          <img src={header_start_img} alt={''} />
        </div>
        <HeaderContent />
      </header>
    )
  }
}

class HeaderContent extends Component {
  render() {
    return (
      <nav>
        <LogingPanel />
        <NavBar />
      </nav>
    )
  }
}

class LogingPanel extends Component {
  render() {
    return (
      <div className={'blockBar'}>
        <div className={'logingBar'}>
          <div className={'signIn'}>Zaloguj</div>
          <div className={'register'}>Załóż konto</div>
        </div>
      </div>
    )
  }
}
class NavBar extends Component {
  render() {
    return (
      <div className={'blockBar'}>
        <ul className={'navBar'}>
          <li>Start</li>
          <li>O co chodzi?</li>
          <li>O nas</li>
          <li>Fundacje i organizacje</li>
          <li>Kontakt</li>
        </ul>
      </div>  
    )
  }
}
export default Header;