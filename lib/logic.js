
export function getWinner(rules, playerOneChoice, playerTwoChoice) {

  if (playerOneChoice === playerTwoChoice) return undefined;

  let winner;

  const playerOneIndex = rules.indexOf(playerOneChoice);
  const playerTwoIndex = rules.indexOf(playerTwoChoice);
  const parityMatch = playerOneIndex % 2 === playerTwoIndex % 2;

  if(parityMatch){
    winner = playerOneIndex < playerTwoIndex ? 'player1' : 'player2';
  }else {
    winner = playerOneIndex > playerTwoIndex ? 'player1' : 'player2';
  }

  return winner;
}
