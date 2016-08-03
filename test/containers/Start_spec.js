import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {expect} from 'chai'
import {Start} from '../../src/containers/Start'
import {fromJS} from 'immutable'


describe('Start', () => {
  it('renders a text box and button so the player can submit name', () => {
    const component = renderIntoDocument(
      <Start/>
    );
    const button = findRenderedDOMComponentWithTag(component, 'button')
    const textbox = findRenderedDOMComponentWithTag(component, 'input')

    expect(button.textContent).to.include('START');
    expect(textbox).to.be;
  })

  it('submit button invokes a callback', () => {
    let player1;
    const setName = (entry) => player1 = entry
    const component = renderIntoDocument(
      <Start setName={setName}/>
    );
    const submitName = findRenderedDOMComponentWithTag(component, 'button')
    const textbox = findRenderedDOMComponentWithTag(component, 'input')

    Simulate.change(textbox, {target: {value: "Ryu"}})
    Simulate.click(submitName)

    expect(player1).to.equal('Ryu');
  })

  it('a player must enter a name to invoke the callback',() => {
    let player1;
    const setName = (entry) => player1 = entry
    const component = renderIntoDocument(
      <Start setName={setName}/>
    );
    const submitName = findRenderedDOMComponentWithTag(component, 'button')
    const textbox = findRenderedDOMComponentWithTag(component, 'input')

    Simulate.click(submitName)

    expect(player1).to.equal(undefined);
  })

  context('when a player has submitted a name', () => {

    it('renders rule options', () => {
      const player1 = 'Ehonda'
      const availableRules = fromJS({
        names: ['RPS', 'RPSLS']
      })
      const component = renderIntoDocument(
        <Start player1={player1}
               availableRules={availableRules}/>
      );

      const buttons = scryRenderedDOMComponentsWithTag(component, 'button')


      const buttonNames = buttons.map((button) => button.textContent)

      expect(buttonNames).not.to.include('submit')
      expect(buttonNames).to.include('RPS')
      expect(buttonNames).to.include('RPSLS')
    })

    it('clicking a rule option invokes a callback using the assigned rules', () => {
      let rules;
      const setRules = (entry) => rules = entry
      const player1 = 'Ehonda'
      const availableRules = fromJS({
        names: ['RPS', 'RPSLS']
      })

      const component = renderIntoDocument(
        <Start player1={player1}
               availableRules={availableRules}
               setRules={setRules}/>
      );

      const buttons =  scryRenderedDOMComponentsWithTag(component, 'button')

      Simulate.click(buttons[0])

      expect(rules).to.equal('RPS')
      Simulate.click(buttons[1])
      expect(rules).to.equal('RPSLS')

    })
  })
})
