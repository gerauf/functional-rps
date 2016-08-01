import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';

// const player1 = "Ehonda"
const availableRules = ['RPS', 'RPSLS']
const rules = ['Rock', 'Paper', 'Scissors']
const player1 = {
  name: "Luke",
  choice: 'Rock'
}
const player2 = {
  name: "Darth",
  score: 1,
  choice: 'Rock'
}


ReactDOM.render(
  <Game  rules={rules}
         player1={player1}
         player2={player2}
         />,
  document.getElementById('app')
)
