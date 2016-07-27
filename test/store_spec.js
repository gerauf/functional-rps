import {Map, fromJS} from 'immutable'
import {expect} from 'chai'

import makeStore from '../src/store'

describe('store', () => {
  it('is a redux store configured with the correct reducer', () => {
    const store = makeStore()

    expect(store.getState()).to.equal(Map())

    store.dispatch({
      type: 'SET_NAMES',
      player1: 'yoda',
      player2: 'keith'
    })

    expect(store.getState()).to.equal(fromJS({
      names: {
        player1: 'yoda',
        player2: 'keith'
      }
    }))
  })
})
