import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';

import './Goat.scss';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    takeAGoat: PropTypes.func,
    freeAGoat: PropTypes.func,
  }

  takeGoatEvent = (e) => {
    e.preventDefault();
    const { goat, takeAGoat } = this.props;
    takeAGoat(goat.id);
  };

  freeGoatEvent = (e) => {
    e.preventDefault();
    const { goat, freeAGoat } = this.props;
    freeAGoat(goat.id);
  };

  render() {
    const { goat } = this.props;
    return (
        <div className="card">
          <img className="card-img-top" src={goat.imgUrl} alt="One goat"/>
          <div className="card-img-overlay">
            <h5 className="card-title">{goat.name}</h5>
            <p className="card-text">{goat.description}</p>
          </div>
          <div className="card-footer">
            {
              goat.isBusy ? (
                <button className="btn btn-danger col-12" onClick={this.freeGoatEvent}> Free the Goat</button>
              ) : (
                <button className="btn btn-success col-12" onClick={this.takeGoatEvent}>Take the Goat</button>
              )
            }
          </div>
        </div>
    );
  }
}

export default Goat;
