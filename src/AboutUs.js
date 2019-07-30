import React, {Component} from 'react';
import decoration from './images/decoration.png';
import about from './images/about.jpg';
import signature from './images/signature.png';


class AboutUs extends Component {
  render() {
    return (
      <div className={'AboutUs'}>
        <div>
          <h2>O Nas</h2>
          <img src={decoration} alt={'Decoration element'} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu justo nulla. Nulla facilisi.
            <img src={signature} alt={'Member sign'}/>
          </p>
        </div>
        <div>
          <img src={about} alt={'All people together'}/>
        </div>
      </div>
    )
  }
}

export default AboutUs;