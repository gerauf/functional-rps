import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  scryRenderedDOMComponentsWithClass,
  findRenderedDOMComponentWithClass,
  Simulate
} from 'react-addons-test-utils';
import {List, fromJS} from 'immutable'
import {expect} from 'chai'
import {Game} from '../../src/containers/Game'

describe('Game container integration', () => {

  context('when there is a winner', () => {
    it('the weapon buttons are disabled', () => {
      const rules = List('Rock', 'Paper', 'Scissors')
      const player1 = fromJS({ name: "Yoda" })
      const player2 = fromJS({ name: "Obi" })
      const winner = fromJS({ name: 'Yoda' })
      const component = renderIntoDocument(
        <Game rules={rules}
              player1={player1}
              player2={player2}
              winner={winner}/>
      )
      const weapons = scryRenderedDOMComponentsWithClass(component, 'weapon')

      expect(weapons[0].hasAttribute('disabled')).to.be.true
      expect(weapons[1].hasAttribute('disabled')).to.be.true
      expect(weapons[2].hasAttribute('disabled')).to.be.true
    })
  })
})
