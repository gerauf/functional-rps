import {Map, fromJS} from 'immutable'
import {expect} from 'chai';

import {setNames, setRules, play} from '../src/core'


describe('application logic', () => {

  describe('#setName()', () => {
    it('adds player names to the state', () => {
      const state = Map()
      const player1 = 'Ryu'
      const player2 = 'Ken'

      const nextState = setNames(state, player1, player2)

      expect(nextState).to.equal(fromJS({
        names: {
          player1: 'Ryu',
          player2: 'Ken'
        }
      }))
    });

    it('defines player two as computer if no other name given', () => {
      const state = Map()
      const playerOneName = 'Ryu'

      const nextState = setNames(state, playerOneName)

      expect(nextState).to.equal(fromJS({
        names: {
          player1: 'Ryu',
          player2: 'Computer'
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
    it('increases the score for winning choice', () => {
      const state = fromJS({
        rules: ['rock', 'paper', 'scissor']
      })
      const playerChoice = 'scissor'
      const computerChoice = 'rock'

      const nextState = play(state, playerChoice, computerChoice)

      expect(nextState).to.equal(fromJS({
        rules: ['rock', 'paper', 'scissor'],
        score: {
          player2: 1
        }
      }))
    })

    it('a tie does not increase the score', () => {
      const state = fromJS({
        rules: ['rock', 'paper', 'scissor'],
        score: {
          player1: 1,
          player2: 1
        }
      })
      const playerChoice = 'rock'
      const computerChoice = 'rock'

      const nextState = play(state, playerChoice, computerChoice)

      expect(nextState).to.equal(fromJS({
        rules: ['rock', 'paper', 'scissor'],
        score: {
          player1: 1,
          player2: 1
        }
      }))
    })

    it('declares winner if a player reaches a score of 2', () => {
      const state = fromJS({
        rules: ['rock', 'paper', 'scissor'],
        score: {
          player1: 1,
          player2: 1
        }
      })
      const playerChoice = 'paper'
      const computerChoice = 'rock'

      const nextState = play(state, playerChoice, computerChoice)

      expect(nextState).to.equal(fromJS({
        winner: 'player1'
      }))
    })
  })
});
