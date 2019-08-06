import React, {Component} from 'react';
import decoration from './images/decoration.png';

class ChantriesList extends Component {
  render() {
    return (
      <section className={'ChantriesList'}>
        <div className={'chantriesListContainer'}>
          <p>Komu pomagamy?</p>
          <img src={decoration} alt={'Decoration element'} />
          <ul className={'chantriesListSmallBoxes'}>
            <li>Fundacjom</li>
            <li>Organizacjom pozarządowym</li>
            <li>Lokalnym zbiórkom</li>
          </ul>
          <p>W naszej bazie znajdziesz listę zweryfikowanych fundacji z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
          <div className={'charitiesList'}>
            <ul className={'listLeft'}>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
            <ul className={'listRight'}>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default ChantriesList;