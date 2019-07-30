import React, {Component} from 'react';
import { Link} from 'react-scroll';
import header_start_img from './images/header_start_img.jpg';
import decoration from './images/decoration.png';
const options = {
  activeClass: "active", 
  smooth: true, 
  duration: 500
}

class Header extends Component {
  render() {
    return (
        <header>
          <div className={'headerImages'}>
            <img src={header_start_img} alt={'Packed staff'} />
          </div>
          <nav>
          <ul className={'logingBar'}>
            <li>Zaloguj</li>
            <li>Załóż konto</li>
          </ul>
          <ul className={'navBar'}>
            <li>Start</li>
            <li><Link to="StatsInfo" {...options}>O co chodzi?</Link></li>
            <li><Link to="AboutUs" {...options}>O nas</Link></li>
            <li><Link to="ChantriesList" {...options}>Fundacje i organizacje</Link></li>
            <li><Link to="Contact" {...options}>OKontakt</Link></li>
          </ul>
        </nav>
        
        <div className={'headerContent'}>
          <div>Zacznij pomagać!</div>
          <div>Oddaj niechciane rzeczy w zaufane ręce</div>
          <img src={decoration} alt={'Decoration element'} />
          <ul>
            <li>ODDAJ RZECZY</li>
            <li>ZORGANIZUJ ZBIÓRKĘ</li>
          </ul>
        </div>
      </header>
    )
  }
}
export default Header;