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
