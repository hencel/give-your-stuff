import React, {Component} from 'react';
import header_start_img from './images/header_start_img.jpg';
import decoration from './images/decoration.png';


class Header extends Component {
  render() {
    return (
      <React.Fragment>
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
            <li>O co chodzi?</li>
            <li>O nas</li>
            <li>Fundacje i organizacje</li>
            <li>Kontakt</li>
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
      </React.Fragment>
     
    )
  }
}
export default Header;