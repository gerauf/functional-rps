import React from 'react';


export default class extends React.Component{
  render() {
    return(
      <div>
        <h4> Player 1 choice: {this.props.player1.get('choice')} </h4>
        <h4> Player 2 choice: {this.props.player2.get('choice')} </h4>
      </div>
    )
  }
}
