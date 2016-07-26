import {Map, fromJS} from 'immutable'
import {expect} from 'chai';

import {setName, setRules, play} from '../src/core'


describe('application logic', () => {

  describe('#setName', () => {
    it('adds player names to the state', () => {
      const state = Map()
      const playerOneName = 'Ryu'
      const playerTwoName = 'Ken'

      const nextState = setName(state, playerOneName, playerTwoName)

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

      const nextState = setName(state, playerOneName)

      expect(nextState).to.equal(fromJS({
        names: {
          player1: 'Ryu',
          player2: 'Computer'
        }
      }))

    })
  });

  describe('#setRules', () => {
    it('adds the available choices to the state', () => {
      const state = Map()
      const rules = ['rock', 'paper', 'scissor']

      const nextState = setRules(state, rules)

      expect(nextState).to.equal(fromJS({
        rules: ['rock', 'paper', 'scissor']
      }))
    })
  })

  describe('#play', () => {
    it('increases the score of winner', () => {
      const state = fromJS({
        rules: ['rock', 'paper', 'scissor']
      })
      const playerChoice = 'paper'
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
        rules: ['rock', 'paper', 'scissor']
      })
      const playerChoice = 'rock'
      const computerChoice = 'rock'

      const nextState = play(state, playerChoice, computerChoice)

      expect(nextState).to.equal(fromJS({
        rules: ['rock', 'paper', 'scissor']
      }))
    })
  })
});
