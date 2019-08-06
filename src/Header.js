import React, {Component} from 'react';
import LogingPanel from './LogingPanel';
import MenuPanel from './MenuPanel';
import header_start_img from './images/header_start_img.jpg';
import decoration from './images/decoration.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div className={'headerImages'}>
          <img src={header_start_img} alt={'Packed staff'} />
        </div>
        <nav>
          <LogingPanel />
          <MenuPanel />
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