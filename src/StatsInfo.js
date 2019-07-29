import React, {Component} from 'react';
import SmallBox from './SmallBox';

class StatsInfo extends Component {
  render() {
    
    return (
      <section className={'StatsInfo'}>
        <SmallBox value={10} name={'ODDANYCH WORKÓW'}/>
        <SmallBox value={5} name={'WSPARTYCH ORGANIZACJI'}/>
        <SmallBox value={7} name={'ZORGANIZOWANYCH ZBIÓREK'}/>
      </section>
    )
  }
}

export default StatsInfo;