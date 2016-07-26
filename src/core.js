import {List} from 'immutable'


export function setName(state, playerOneName, playerTwoName='Computer') {
  return state.setIn(
    ['names', 'player1'],
    playerOneName
  ).setIn(
    ['names', 'player2'],
    playerTwoName
  )
}

export function setRules(state, choices) {
  return state.set('rules', List(choices))
}

export function play(state, playerChoice, computerChoice) {
  const winner = getWinner(state.get('rules'), playerChoice, computerChoice)

  if(!winner) return state

  return state.updateIn(
    ['score', winner],
    0,
    score => score + 1
  )

}


function getWinner(rules, playerChoice, computerChoice) {
  const playerIndex = rules.indexOf(playerChoice) + 1
  const computerIndex = rules.indexOf(computerChoice) + 1
  const availableChoices = rules.size

  let winnerValue = (playerIndex - computerIndex) % availableChoices

  if (winnerValue === 0) return false
  let winner = winnerValue % 2 === 0 ? 'player1' : 'player2'
  return winner

}
