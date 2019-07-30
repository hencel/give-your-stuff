import React, {Component} from 'react';
import decoration from './images/decoration.png';
import icon01 from './images/select.jpg';
import icon02 from './images/pack.png';
import icon03 from './images/whoHelps.png';
import icon04 from './images/orderCourier.png';
import FourStepsTinyBoxes from './FourStepsTinyBoxes';

class FourStepsInfo extends Component {
  render() {
    return (
      <section className={'FourStepsInfo'}>
        <div className={'FourStepsInfoPanel'}>
          <div>Wystarczą 4 proste kroki</div>
          <img src={decoration} alt={'Decoration element'} />
          <div className={'FourStepsTinyBoxes'}>
            <FourStepsTinyBoxes img={icon01} slogan={'Wybierz rzeczy'} description={'ubrania, zabawki, sprzęt i inne'}/>
            <FourStepsTinyBoxes img={icon02} slogan={'Spakuj je'} description={'skorzystaj z worków na śmieci'}/>
            <FourStepsTinyBoxes img={icon03} slogan={'Zdecyduj komu chcesz pomóc'} description={'wybierz zaufane miejsce'}/>
            <FourStepsTinyBoxes img={icon04} slogan={'Zamów kuriera'} description={'kurier przyjedzie w dogodnym terminie'}/>
          </div>
          <button>ZAŁÓŻ KONTO</button>
        </div>
      </section>
    )
  }
}

export default FourStepsInfo;