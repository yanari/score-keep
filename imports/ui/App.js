import React, { Component } from 'react';

import { Players, calculatePlayerPositions } from '../api/player';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class App extends Component {
  render() {
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    return (
      <>
        <TitleBar title='Score Keep' subtitle='Created by Marcelle Yanari' />
        <div className='wrapper'>
          <PlayerList players={positionedPlayers} />
          <AddPlayer />
        </div>
      </>
    );
  }
}

export default App;