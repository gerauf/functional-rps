import {List} from 'immutable'
import {getWinner} from './logic'


export function setNames(state, player1, player2='Computer') {
  return state.setIn(
    ['names', 'player1'],
    player1
  ).setIn(
    ['names', 'player2'],
    player2
  )
}

export function setRules(state, rules) {
  return state.set('rules', List(rules))
}

export function play(state, player1Choice, player2Choice) {
  const winner = getWinner(state.get('rules'), player1Choice, player2Choice)

  if(!winner) return state

  if(state.getIn(['score', winner],0) + 1 < 2){
    return state.updateIn(['score', winner], 0, score => score + 1)
  } else {
    return state.remove('score')
                .remove('rules')
                .set('winner', winner)
  }

}
