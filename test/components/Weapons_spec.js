import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {fromJS} from 'immutable'
import {expect} from 'chai'
import Weapons from '../../src/components/Weapons'

describe('Weapons component', () => {
  it('renders a button for each available weapon', () => {
    const rules = ['Rock', 'Paper', 'Scissors']
    const component = renderIntoDocument(
      <Weapons rules={rules}/>
    );

    const weapons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(weapons[0].textContent).to.include('Rock')
    expect(weapons[1].textContent).to.include('Paper')
    expect(weapons[2].textContent).to.include('Scissors')
  })

  it('buttons invokes a callback passing it as an arg along with a random weapon for the computer', () => {
    let playerChoice;
    let computerChoice;
    const play = (weapon1, weapon2) => [playerChoice, computerChoice] = [weapon1, weapon2]
    const rules = fromJS(['Rock', 'Paper', 'Scissors'])
    const component = renderIntoDocument(
      <Weapons rules={rules}
               play={play}
      />
    );
    const weapons = scryRenderedDOMComponentsWithTag(component, 'button')

    Simulate.click(weapons[0])

    expect(playerChoice).to.equal(rules.get(0))
    expect(rules).to.include(computerChoice)
  })
})
