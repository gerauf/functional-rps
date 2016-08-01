import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import {fromJS} from 'immutable'
import {expect} from 'chai'
import Game from '../../src/components/Game'

describe('The main game components', () => {
  it('renders the player names and scores', () => {
    const rules = ['Rock', 'Paper', 'Scissors']
    const player1 = { name: "Yoda", score: 1}
    const player2 = { name: "Obi", score: 5}
    const component = renderIntoDocument(
      <Game rules={rules}
            player1={player1}
            player2={player2}
            />
    );

    const names = scryRenderedDOMComponentsWithClass(component, 'player-name')
    expect(names[0].textContent).to.include('Yoda')
    expect(names[1].textContent).to.include('Obi')

    const scores = scryRenderedDOMComponentsWithClass(component, 'player-score')
    expect(scores[0].textContent).to.include('1')
    expect(scores[1].textContent).to.include('5')
  })

  it('sets score to 0 for a player who has yet to score', () => {
    const rules = ['Rock', 'Paper', 'Scissors']
    const player1 = { name: "Yoda", score: 1}
    const player2 = { name: "Obi"}
    const component = renderIntoDocument(
      <Game rules={rules}
            player1={player1}
            player2={player2}
            />
    );

    const scores = scryRenderedDOMComponentsWithClass(component, 'player-score')
    expect(scores[1].textContent).to.include('0')
  })

  it('renders a button for each of the available weapons', () => {
    const rules = ['Rock', 'Paper', 'Scissors']
    const player1 = { name: "Yoda" }
    const player2 = { name: "Obi" }
    const component = renderIntoDocument(
      <Game rules={rules}
            player1={player1}
            player2={player2}
            />
    );

    const weapons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(weapons[0].textContent).to.include('Rock')
    expect(weapons[1].textContent).to.include('Paper')
    expect(weapons[2].textContent).to.include('Scissors')
  })
  context('when a weapon is selected', ()=> {

    it('it invokes a callback passing it as an arg along with a random weapon for the computer', () => {
      let playerChoice;
      let computerChoice;
      const play = (weapon1, weapon2) => [playerChoice, computerChoice] = [weapon1, weapon2]
      const rules = ['Rock', 'Paper', 'Scissors']
      const player1 = { name: "Yoda" }
      const player2 = { name: "Obi" }
      const component = renderIntoDocument(
        <Game rules={rules}
        player1={player1}
        player2={player2}
        play={play}
        />
      );
      const weapons = scryRenderedDOMComponentsWithTag(component, 'button')

      Simulate.click(weapons[0])

      console.log([playerChoice, computerChoice]);

      expect(playerChoice).to.equal('Rock')
      expect(rules).to.include(computerChoice)
    })
  })

})
