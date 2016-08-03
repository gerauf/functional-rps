import React from 'react';
import Player from '../components/Player';
import Arena from '../components/Arena';


export default class extends React.Component{
  render(){

    return(
        <section className="game-container">
          <Player player={this.props.player1}/>

          <Arena player1={this.props.player1}
                 player2={this.props.player2}/>

          <Player player={this.props.player2}/>
        </section>
      )
    }
  }
