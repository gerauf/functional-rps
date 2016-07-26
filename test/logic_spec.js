import {expect} from 'chai';
import {getWinner} from '../src/logic'

describe('rps-logic', () => {
  describe('#getWinner()', () => {

    it('returns undefined if choices are the same', () => {
      const rules = ['rock', 'paper', 'scissor']
      const playerOneChoice = 'paper'
      const playerTwoChoice = 'paper'

      const winner = getWinner(rules, playerOneChoice, playerTwoChoice)

      expect(winner).to.equal(undefined)

    })

    context('when parity of indexes of choice in rules match', () => {
      it('returns the player whose choice has the lowest index', () => {
        const rules = ['rock', 'paper', 'scissor']
        const playerOneChoice = 'rock'
        const playerTwoChoice = 'scissor'

        const winner = getWinner(rules, playerOneChoice, playerTwoChoice)

        expect(winner).to.equal('player1')

      })
    })

    context('when parity of indexes of choice in rules do not match', () => {
      it('returns the player whose choice has the highest index', () => {
        const rules = ['rock', 'paper', 'scissor']
        const playerOneChoice = 'paper'
        const playerTwoChoice = 'scissor'

        const winner = getWinner(rules, playerOneChoice, playerTwoChoice)

        expect(winner).to.equal('player2')

      })
    })

  })
})
