import React from 'react';
import {connect} from 'react-redux';
import Weapons from '../components/Weapons';
import Player from '../components/Player';
import Arena from '../components/Arena';
import Winner from '../components/Winner';
import * as actionCreators from '../action_creators';


export class Game extends React.Component{
  whenWinner(){
    if(this.props.winner){
      <Winner playAgain={this.props.playAgain}
        changeRules={this.props.changeRules}
        winner={this.props.winner}/>
    }
  }
  render(){
    return(
      <div>
        <section className="game-container">
          <Player player={this.props.player1}/>

          <Arena player1={this.props.player1}
                 player2={this.props.player2}/>

          <Player player={this.props.player2}/>
        </section>

        {this.whenWinner()}

        <Weapons rules={this.props.rules}
                 play={this.props.play}
                 winner={this.props.winner}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    player1: state.get('player1'),
    player2: state.get('player2'),
    rules: state.get('rules'),
    winner: state.get('winner')
  };
}

export const GameContainer = connect(
  mapStateToProps,
  actionCreators
)(Game);
