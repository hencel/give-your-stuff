import React, {Component} from 'react';
import decoration from './images/decoration.png';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      message: '',
      messageError: ''
    }
  }
  handleOnBlur = (name) => (e) => {
    this.setState({
      [name]: e.target.value ? '' : 'Zła wartość'
    })
  }

  handlerChange = event => {
    this.setState( {
      [event.target.name]: event.target.value
    })
  }
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
                <li>
                  {this.state.nameError ? <p style={{color: 'red'}}>{this.state.nameError}</p> : null}
                  <input type='text' name='name' value={this.state.name} onBlur={this.handleOnBlur('nameError')} onChange={this.handlerChange} placeholder={'Imię'}></input></li>
                <li>
                  {this.state.emailError ? <p style={{color: 'red'}}>{this.state.emailError}</p> : null}
                  <input type='text' name='email' value={this.state.email} onBlur={this.handleOnBlur('emailError')} onChange={this.handlerChange} placeholder={'Email'}></input></li>
              </ul>
              {this.state.messageError ? <p style={{color: 'red'}}>{this.state.messageError}</p> : null}
              <input className={'message'} type='text' name='message' value={this.state.message} onBlur={this.handleOnBlur('messageError')} onChange={this.handlerChange} required placeholder={'Wiadomość'}></input>
              <input className={'sendButton'} type="submit" value="Wyślij" />
            </form>
          </div>
        </div>
        <footer>
          <div>Copyright 2019 {'\u00A9'} by Zbigniew Piernik</div>
        </footer>
      </section>
    )
  }
}

export default Contact;