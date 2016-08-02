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
  console.log(player1Choice);
  console.log(player2Choice);
  return {
    type: 'PLAY',
    player1Choice,
    player2Choice
  };
}
