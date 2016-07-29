import React from 'react'


export default React.createClass({
  getScore: function() {
    return this.props.player.score || 0
  },
  render: function() {
    return(
      <div className={this.props.class}>
        <h4> Player name: {this.props.player.name} </h4>
        <h6> Player score: {this.getScore()} </h6>
      </div>
    )
  }
})