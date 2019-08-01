import React, {Component} from 'react';
import decoration from './images/decoration.png';
import fb from './images/fb.png';
import insta from './images/insta.png';

class Contact extends Component {
  render() {
    return (
      <section className={'Contact'}>
        <div className={'ContactContainer'}>
          <div>
            <p>Skontaktuj się z nami</p>
            <img src={decoration} alt={'Decoration element'} />
            <form>
              <legend>FORMULARZ KONTAKTOWY</legend>
              <ul>
                <li><input placeholder={'Imię'}></input></li>
                <li><input placeholder={'Email'}></input></li>
              </ul>
              <input placeholder={'Wiadomość'}></input>
              <button>Wyślij</button>
            </form>
          </div>
        </div>
        <footer>
          <div>Copyright 2019 {'\u00A9'} by Zbigniew Piernik</div>
          <div className={'socialLogos'}>
            <img src={fb} alt={'Facebook logo'}/>
            <img src={insta} alt={'Instagram logo'}/>
          </div>
        </footer>
      </section>
    )
  }
}

export default Contact;