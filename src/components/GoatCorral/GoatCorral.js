import React from 'react';
import PropTypes from 'prop-types';

import Goat from '../Goat/Goat';

import goatShape from '../../helpers/propz/goatShape';

import './GoatCorral.scss';

class GoatCorral extends React.Component {
  static propType = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
    takeAGoat: PropTypes.func,
  }

  render() {
    const { goats, takeAGoat } = this.props;

    const goatCards = goats.map((goat) => (
     <Goat key={goat.id} goat={goat} takeAGoat={takeAGoat}/>
    ));

    return (
      <div>
        <h2>GET YOUR GOAT</h2>
        <div className="card-columns">
    { goatCards }
    </div>
      </div>
    );
  }
}

export default GoatCorral;
