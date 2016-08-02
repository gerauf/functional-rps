import {expect} from 'chai'
import {Map, fromJS} from 'immutable'

import reducer from '../src/reducer'

describe('#reducer()', () => {
  it('handles SET_NAMES', () => {
    const initialState = Map()
    const action = {type: 'SET_NAMES', player1: 'Darth', player2: 'Luke'}

    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      player1: { name: 'Darth' },
      player2: { name: 'Luke' }
    }))
  })

  it('handles SET_RULES', () => {
    const initialState = fromJS({
      availableRules: {
        names: ['rules1', 'rules2'],
        weapons: {
          rules1: [1,2,3],
          rules2: [4,5,6]
        }
      }
    })
    const choice = 'rules1'
    const action = {type: 'SET_RULES', choice: choice}

    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      availableRules: {
        names: ['rules1', 'rules2'],
        weapons: {
          rules1: [1,2,3],
          rules2: [4,5,6]
        }
      },
      rules: [1, 2, 3]
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
      player2: { score: 1 }
    }))
  })

  it('handles PLAY_AGAIN', () => {
    const initialState = fromJS({
      rules: ['rock', 'paper', 'scissor'],
      player1: { name: 'Jon', score: 2 },
      player2: { name: 'Snow', score: 1 },
      winner: 'player1'
    })
    const action = {type: 'PLAY_AGAIN'}

    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      rules: ['rock', 'paper', 'scissor'],
      player1: { name: 'Jon' },
      player2: { name: 'Snow' }
    }))
  })

  it('handles CHANGE_RULES', () => {
    const initialState = fromJS({
      rules: ['rock', 'paper', 'scissor'],
      player1: { name: 'Jon', score: 2 },
      player2: { name: 'Snow', score: 1 },
      winner: 'player1'
    })
    const action = {type: 'CHANGE_RULES'}

    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      player1: { name: 'Jon' },
      player2: { name: 'Snow' }
    }))
  })

  it('can be used with reduce', () => {
    const initialState = fromJS({
      availableRules: {
        names: ['RPS', 'Starwars'],
        weapons: {
          RPS: ['Rock', 'Paper', 'Scissor'],
          Starwars: ['Lightsabre', 'Force Choke', 'Ewok']
        }
      }
    })

    const actions = [
      {type: 'SET_NAMES', player1: 'Luke', player2: 'Darth'},
      {type: 'SET_RULES', choice: 'Starwars'},
      {type: 'PLAY', player1Choice: 'Lightsabre', player2Choice: 'Force Choke'},
    ]

    const finalState = actions.reduce(reducer, initialState);

    expect(finalState).to.equal(fromJS({
      availableRules: {
        names: ['RPS', 'Starwars'],
        weapons: {
          RPS: ['Rock', 'Paper', 'Scissor'],
          Starwars: ['Lightsabre', 'Force Choke', 'Ewok']
        }
      },
      rules: ['Lightsabre', 'Force Choke', 'Ewok'],
      player1: { name: 'Luke' },
      player2: { name: 'Darth', score: 1 }
    }))
  })

  it('has an undefined initial state', () => {
    const action = {type: 'SET_NAMES', player1: 'Ham', player2: 'Chicken'}

    const nextState = reducer(undefined, action)

    expect(nextState).to.equal(fromJS({
      availableRules: {
        names: ['RPS', 'Starwars'],
        weapons: {
          RPS: ['Rock', 'Paper', 'Scissor'],
          Starwars: ['Lightsabre', 'Force Choke', 'Ewok']
        }
      },
      player1: { name: 'Ham' },
      player2: { name: 'Chicken' }
    }))
  })
})
