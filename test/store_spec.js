import {Map, fromJS} from 'immutable'
import {expect} from 'chai'

import makeStore from '../src/store'

describe('store', () => {
  it('is a redux store configured with the correct reducer and initial state', () => {
    const store = makeStore()
    const initialState =

    expect(store.getState()).to.equal(fromJS({
      availableRules: {
        names: ['RPS', 'Starwars'],
        weapons: {
          rules1: ['Rock', 'Paper', 'Scissor'],
          rules2: ['Lightsabre', 'Force Choke', 'Ewok']
        }
      }
    }))

    store.dispatch({
      type: 'SET_NAMES',
      player1: 'yoda',
      player2: 'keith'
    })

    expect(store.getState()).to.equal(fromJS({
      availableRules: {
        names: ['RPS', 'Starwars'],
        weapons: {
          rules1: ['Rock', 'Paper', 'Scissor'],
          rules2: ['Lightsabre', 'Force Choke', 'Ewok']
        }
      },
      names: {
        player1: 'yoda',
        player2: 'keith'
      }
    }))
  })
})
