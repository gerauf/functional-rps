import {Map} from 'immutable'
import {setNames, setRules, play} from './core'

const INITIAL_STATE = Map()

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_NAMES':
      return setNames(state, action.player1, action.player2)
    case 'SET_RULES':
      return setRules(state, action.rules)
    case 'PLAY':
      return play(state, action.player1Choice, action.player2Choice)
  }
  return state

}
