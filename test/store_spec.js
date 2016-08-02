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
          RPS: ['Rock', 'Paper', 'Scissor'],
          Starwars: ['Lightsabre', 'Force Choke', 'Ewok']
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
          RPS: ['Rock', 'Paper', 'Scissor'],
          Starwars: ['Lightsabre', 'Force Choke', 'Ewok']
        }
      },
      player1: {
        name: 'yoda'
      },
      player2: {
        name: 'keith'
      }
    }))
  })
})
