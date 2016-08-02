
export function getWinner(rules, playerOneChoice, playerTwoChoice) {

  if (playerOneChoice === playerTwoChoice) return undefined

  const playerOneIndex = rules.indexOf(playerOneChoice)
  const playerTwoIndex = rules.indexOf(playerTwoChoice)
  const parityMatch = playerOneIndex % 2 === playerTwoIndex % 2

  if(parityMatch){
    var winner = playerOneIndex < playerTwoIndex ? 'player1' : 'player2'
  }else {
    var winner = playerOneIndex > playerTwoIndex ? 'player1' : 'player2'
  }

  return winner
}
