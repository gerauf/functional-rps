import React from 'react'

export default React.createClass({
  getScore: function() {
    return this.props.player.get('score') || 0
  },
  getPlayer: function() {
    return this.props.player.get('name') || ''
  },
  render: function() {
    return(
      <div className={this.props.class}>
        <h4 className="player-name"> Player name: {this.getPlayer()} </h4>
        <h6 className="player-score"> Player score: {this.getScore()} </h6>
      </div>
    )
  }
})
