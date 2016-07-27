import {expect} from 'chai'
import {Map, fromJS} from 'immutable'

import reducer from '../src/reducer'

describe('#reducer()', () => {
  it('handles SET_NAMES', () => {
    const initialState = Map()
    const action = {type: 'SET_NAMES', player1: 'Darth', player2: 'Luke'}

    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      names: {
        player1: 'Darth',
        player2: 'Luke'
      }
    }))
  })

  it('handles SET_RULES', () => {
    const initialState = Map()
    const action = {type: 'SET_RULES', rules: ['R', 'P', 'S']}

    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      rules: ['R', 'P', 'S']
    }))

  })

  it('handles PLAY', () => {
    const initialState = fromJS({
      rules: ['R', 'P', 'S']
    })
    const action = {type: 'PLAY', player1Choice: 'R', player2Choice: 'P'}

    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      rules: ['R', 'P', 'S'],
      score: {
        player2: 1
      }
    }))
  })

  it('can be used with reduce', () => {
    const actions = [
      {type: 'SET_NAMES', player1: 'Luke', player2: 'Darth'},
      {type: 'SET_RULES', rules: ['Lightsabre', 'Force Choke', 'Ewok']},
      {type: 'PLAY', player1Choice: 'Lightsabre', player2Choice: 'Force Choke'},
      {type: 'PLAY', player1Choice: 'Force Choke', player2Choice: 'Lightsabre'},
      {type: 'PLAY', player1Choice: 'Ewok', player2Choice: 'Force Choke'},
    ]

    const finalState = actions.reduce(reducer, Map());

    expect(finalState).to.equal(fromJS({
      names: {
        player1: 'Luke',
        player2: 'Darth'
      },
      winner: 'player1'
    }))
  })

  it('has an undefined state', () => {
    const action = {type: 'SET_NAMES', player1: 'Ham', player2: 'Chicken'}

    const nextState = reducer(undefined, action)

    expect(nextState).to.equal(fromJS({
      names: {
        player1: 'Ham',
        player2: 'Chicken'
      }
    }))
  })
})
