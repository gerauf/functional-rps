import {Map, fromJS} from 'immutable'
import {expect} from 'chai'
import {INITIAL_STATE} from '../src/core'

import makeStore from '../src/store'

describe('store', () => {
  it('is a redux store configured with the correct reducer and initial state', () => {
    const store = makeStore()

    expect(store.getState()).to.equal(INITIAL_STATE)

    store.dispatch({
      type: 'SET_NAMES',
      player1: 'yoda',
      player2: 'keith'
    })

    expect(store.getState()).to.equal(INITIAL_STATE.merge(fromJS({
      player1: {
        name: 'yoda'
      },
      player2: {
        name: 'keith'
      }
    })))
  })
})
