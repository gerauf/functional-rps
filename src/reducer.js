import {Map} from 'immutable'
import {setNames, setRules, play, playAgain, changeRules, INITIAL_STATE} from './core'

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_NAMES':
      return setNames(state, action.player1, action.player2)
    case 'SET_RULES':
      return setRules(state, action.choice)
    case 'PLAY':
      return play(state, action.player1Choice, action.player2Choice)
    case 'PLAY_AGAIN':
      return playAgain(state)
    case 'CHANGE_RULES':
      return changeRules(state)
  }
  return state

}
