export function setName(player1) {
  return {
    type: 'SET_NAMES',
    player1
  };
}

export function setRules(choice) {
  return {
    type: 'SET_RULES',
    choice
  };
}

export function play(player1Choice, player2Choice) {
  return {
    type: 'PLAY',
    player1Choice,
    player2Choice
  };
}

export function playAgain() {
  return {
    type: 'PLAY_AGAIN'
  };
}

export function changeRules() {
  return {
    type: 'CHANGE_RULES'
  };
}
