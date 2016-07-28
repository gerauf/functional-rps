import React from 'react';
import ReactDOM from 'react-dom';
import Start from './components/Start';

const player1 = "Ehonda"
const availableRules = ['RPS', 'RPSLS']


ReactDOM.render(
  <Start player1={player1}
         availableRules={availableRules}/>,
  document.getElementById('app')
)
