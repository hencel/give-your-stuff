import React, {Component} from 'react';

class SmallBox extends Component {
  render() {
    return (
      <section className={'smallBox'}>
        <div>{this.props.value}</div>
        <div>{this.props.name}</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget suscipit enim. Fusce sit amet lorem luctus, mollis lectus vitae, suscipit ligula. Phasellus at sem pretium, pulvinar ex quis, aliquam dui.</div>
      </section>
    )
  }
}

export default SmallBox;