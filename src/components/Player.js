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
      <div className="player">
        <h4 className="player-name"> Name: <span>{this.getPlayer()}</span> </h4>
        <h5 className="player-score"> Score: <span>{this.getScore()}</span>  </h5>
      </div>
    )
  }
})
