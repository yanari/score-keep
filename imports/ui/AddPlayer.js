import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Players } from '../api/player';

class AddPlayer extends Component {
  handleSubmit = event => {
    let playerName = event.target.playerName.value;

    if (playerName) {
      event.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className='item'>
        <form className='form' onSubmit={this.handleSubmit}>
          <input className='form__input' type='text' name='playerName' placeholder='Player name' />
          <button className='button'>Add Player</button>
        </form>
      </div>
    );
  }
}

AddPlayer.propTypes = {
  handleSubmit: PropTypes.func
};

export default AddPlayer;