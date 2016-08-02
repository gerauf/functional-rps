import React from 'react'

export default React.createClass({
  winnerName: function() {

  },
  render: function() {
    return(
      <div>
        <h1 className="winner-msg">{this.props.winner.get('name')} wins</h1>

        <button className="playAgain"
                onClick={() => this.props.playAgain()}>
          play again
        </button>

        <button className="chooseRules"
                onClick={() => this.props.chooseRules()}>
          choose game type
        </button>

      </div>
    )
  }
})
