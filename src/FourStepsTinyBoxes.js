import React, {Component} from 'react';


class FourStepsTinyBoxes extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt={'Icon'}/>
        <div>{this.props.slogan}</div>
        <div className={'bottomBorder'}></div>
        <p>{this.props.description}</p>
      </div>

    )
  }
}

export default FourStepsTinyBoxes;