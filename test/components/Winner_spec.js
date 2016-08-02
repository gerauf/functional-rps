import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithClass,
  Simulate
} from 'react-addons-test-utils';
import {fromJS} from 'immutable'
import {expect} from 'chai'
import Winner from '../../src/components/Winner'

describe('Winner component', () => {
  it('renders the winners name', () => {
    const winner = fromJS({ name: 'Yoda' })
    const component = renderIntoDocument(
      <Winner winner={winner}
      />
    )
    const winMsg = findRenderedDOMComponentWithClass(component, 'winner-msg')

    expect(winMsg.textContent).to.include("Yoda")
  })

  it('renders play again and choose game type buttons', () => {
    const winner = fromJS({ name: 'Yoda' })
    const component = renderIntoDocument(
      <Winner winner={winner}
      />
    )

    const playAgain = findRenderedDOMComponentWithClass(component, 'playAgain')
    const chooseRules = findRenderedDOMComponentWithClass(component, 'chooseRules')

    expect(playAgain.textContent).to.equal("play again")
    expect(chooseRules.textContent).to.equal("choose game type")

  })

  it('buttons have callbacks', () => {
    let playAgainCalled = false;
    let chooseRulesCalled = false;
    const playAgain = () => playAgainCalled = true;
    const chooseRules = () => chooseRulesCalled = true;
    const winner = fromJS({ name: 'Yoda' })

    const component = renderIntoDocument(
      <Winner
        winner={winner}
        playAgain={playAgain}
        chooseRules={chooseRules}
      />
    )

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    Simulate.click(buttons[0])
    Simulate.click(buttons[1])

    expect(playAgainCalled).to.be.true
    expect(chooseRulesCalled).to.be.true
  })
})
