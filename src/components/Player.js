import React from 'react';

export default class extends React.Component{
  getScore() {
    return this.props.player.get('score') || 0
  }
  getPlayer() {
    return this.props.player.get('name') || ''
  }
  render() {
    return(
      <div className="player">
        <h4 className="player-name"> Name: <span>{this.getPlayer()}</span> </h4>
        <h5 className="player-score"> Score: <span>{this.getScore()}</span>  </h5>
      </div>
    )
  }
}
