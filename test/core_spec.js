import {Map, fromJS} from 'immutable'
import {expect} from 'chai';

import {setNames, setRules, play, playAgain, changeRules} from '../src/core'


describe('application logic', () => {

  describe('#setName()', () => {
    it('adds player names to the state', () => {
      const state = Map()
      const player1 = 'Ryu'
      const player2 = 'Ken'

      const nextState = setNames(state, player1, player2)

      expect(nextState).to.equal(fromJS({
        player1:{
          name: 'Ryu'
        },
        player2:{
          name: 'Ken'
        }
      }))
    });

    it('defines player two as computer if no other name given', () => {
      const state = Map()
      const playerOneName = 'Ryu'

      const nextState = setNames(state, playerOneName)

      expect(nextState).to.equal(fromJS({
        player1:{
          name: 'Ryu'
        },
        player2:{
          name: 'Computer'
        }
      }))

    })
  });

  describe('#setRules()', () => {
    it('sets the rules based on rule set chosen', () => {
      const state = fromJS({
        availableRules: {
          names: ['rules1', 'rules2'],
          weapons: {
            rules1: [1,2,3],
            rules2: [4,5,6]
          }
        }
      })
      const choice = 'rules1'

      const nextState = setRules(state, choice)

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
  })

  describe('#play()', () => {
    it('saves choice to state and increases the winners score by one', () => {
      const state = fromJS({
        rules: ['rock', 'paper', 'scissor']
      })
      const playerChoice = 'scissor'
      const computerChoice = 'rock'

      const nextState = play(state, playerChoice, computerChoice)

      expect(nextState).to.equal(fromJS({
        rules: ['rock', 'paper', 'scissor'],
        player2: {
          choice: 'rock',
          score: 1
        },
        player1: {
          choice: 'scissor'
        }
      }))
    })

    it('a tie does not increase the score', () => {
      const state = fromJS({
        rules: ['rock', 'paper', 'scissor'],
        player2: {
          score: 1
        }
      })
      const playerChoice = 'rock'
      const computerChoice = 'rock'

      const nextState = play(state, playerChoice, computerChoice)

      expect(nextState).to.equal(fromJS({
        rules: ['rock', 'paper', 'scissor'],
        player2: {
          choice: 'rock',
          score: 1
        },
        player1: {
          choice: 'rock'
        }
      }))
    })

    it('declares winner if a player reaches a score of 2', () => {
      const state = fromJS({
        rules: ['rock', 'paper', 'scissor'],
        player1: {
          name: 'Jon',
          score: 1
        }
      })
      const playerChoice = 'paper'
      const computerChoice = 'rock'

      const nextState = play(state, playerChoice, computerChoice)

      expect(nextState).to.equal(fromJS({
        rules: ['rock', 'paper', 'scissor'],
        player1: {
          choice: 'paper',
          name: 'Jon',
          score: 2
        },
        player2: {
          choice: 'rock'
        },
        winner: {
          name: 'Jon'
        }
      }))
    })
  })

  describe('#playAgain()', () => {
    it('removes the winner and resets the scores', () => {
      const state = fromJS({
        rules: ['rock', 'paper', 'scissor'],
        player1: {
          name: 'Jon',
          score: 2
        },
        player2: {
          name: 'Snow',
          score: 1
        },
        winner: 'player1'
      })

      const nextState = playAgain(state)

      expect(nextState).to.equal(fromJS({
        rules: ['rock', 'paper', 'scissor'],
        player1: {
          name: 'Jon'
        },
        player2: {
          name: 'Snow'
        }
      }))
    })
  })

  describe('#newRules()', () => {
    it('removes the winner, the current rules and resets the scores', () => {
      const state = fromJS({
        rules: ['rock', 'paper', 'scissor'],
        player1: {
          name: 'Jon',
          score: 2
        },
        player2: {
          name: 'Snow',
          score: 1
        },
        winner: 'player1'
      })

      const nextState = changeRules(state)

      expect(nextState).to.equal(fromJS({
        player1: {
          name: 'Jon'
        },
        player2: {
          name: 'Snow'
        }
      }))
    })
  })
});
