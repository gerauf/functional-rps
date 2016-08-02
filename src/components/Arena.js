import React from 'react'


export default React.createClass({
  render: function() {
    return(
      <div>
        <h4> Player 1 choice: {this.props.player1.get('choice')} </h4>
        <h4> Player 2 choice: {this.props.player2.get('choice')} </h4>
      </div>
    )
  }
})
