import React from 'react'

export default React.createClass({
  winnerName: function() {

  },
  render: function() {
    return(
      <div className="winner-modal">
        <h1 className="winner-msg">{this.props.winner.get('name')} wins</h1>

        <button className="reset-buttons"
                onClick={() => this.props.playAgain()}>
          play again
        </button>

        <button className="reset-buttons"
                onClick={() => this.props.changeRules()}>
          choose game type
        </button>

      </div>
    )
  }
})
