import {List, fromJS} from 'immutable'
import {getWinner} from '../lib/logic'

export const INITIAL_STATE = fromJS({
  availableRules: {
    names: ['RPS', 'Starwars'],
    weapons: {
      RPS: ['Rock', 'Paper', 'Scissor'],
      Starwars: ['Lightsabre', 'Force Choke', 'Ewok']
    }
  }
})

export function setNames(state, player1, player2='Computer') {
  return state.setIn(
    ['player1', 'name'],
    player1
  ).setIn(
    ['player2', 'name'],
    player2
  )
}

export function setRules(state, choice) {
  const rules = state.getIn(['availableRules','weapons',choice])
  return state.set('rules', rules)
}

export function play(state, player1Choice, player2Choice) {
  const winner = getWinner(state.get('rules'), player1Choice, player2Choice)

  if(!winner) return state

  if(state.getIn([winner, 'score'],0) + 1 === 2){
    return state.updateIn([winner, 'score'], 0, score => score + 1)
                .setIn(['winner','player'], winner)
                .setIn(['winner','name'], state.getIn([winner, 'name']))
  } else {
    return state.updateIn([winner, 'score'], 0, score => score + 1)
  }
}

export function playAgain(state) {
  return state.removeIn(['player1', 'score'],'score')
              .removeIn(['player2', 'score'],'score')
              .remove('winner')
}

export function changeRules(state) {
  return playAgain(state).remove('rules')

}
