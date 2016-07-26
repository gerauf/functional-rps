import {List} from 'immutable'
import {getWinner} from './logic'


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

  if(state.getIn(['score', winner],0) + 1 < 2){
    return state.updateIn(['score', winner], 0, score => score + 1)
  } else {
    return state.remove('score')
                .remove('rules')
                .set('winner', winner)
  }

}
