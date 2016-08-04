import React from 'react';


export default class extends React.Component{
  render() {
    let players = [
      this.props.player1,
      this.props.player2
    ]
    let choices = players.map((player) =>
      <h4> {player.get('name')} uses {player.get('choice')} </h4>
    )
    return(
      <div>
        {this.props.player1.get('choice') ?<div className="arena-container"> {choices}</div> : null}
      </div>
    )
  }
}
