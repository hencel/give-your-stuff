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
  handlerChange = event => {
    this.setState( {
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault();

    if(this.state.name.length === 0) {
      this.setState({
        nameError: "Name cannot be empty!"
      })
    }

    if(this.state.email.length === 0 && !this.state.email.includes('@')) {
      this.setState({
        emailError: "Email address it is not valid!"
      })
    }
    if(this.state.message.length === 0) {
      this.setState({
        messageError: "Message cannot be empty!"
      })
    }
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
                  <input type='text' name='name' value={this.state.name} onChange={this.handlerChange} required placeholder={'Imię'}></input></li>
                <li>
                  {this.state.emailError ? <p style={{color: 'red'}}>{this.state.emailError}</p> : null}
                  <input type='text' name='email' value={this.state.email} onChange={this.handlerChange} required placeholder={'Email'}></input></li>
              </ul>
              {this.state.messageError ? <p style={{color: 'red'}}>{this.state.emailError}</p> : null}
              <input className={'message'} type='text' name='message' value={this.state.message} onChange={this.handlerChange} required placeholder={'Wiadomość'}></input>
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