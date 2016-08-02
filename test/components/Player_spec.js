import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
} from 'react-addons-test-utils';
import {fromJS} from 'immutable'
import {expect} from 'chai'
import Player from '../../src/components/Player'

describe('Player component', () => {
  it('renders the player name and score', () => {
    const player1 = fromJS({ name: "Yoda", score: 1})
    const component = renderIntoDocument(
      <Player player={player1}/>
    );

    const name = findRenderedDOMComponentWithClass(component, 'player-name')
    const score = findRenderedDOMComponentWithClass(component, 'player-score')

    expect(name.textContent).to.include('Yoda')
    expect(score.textContent).to.include('1')
  })

  it('sets the score to 0 for a player who has yet to score', () => {
    const player1 = fromJS({ name: "Obi" })
    const component = renderIntoDocument(
      <Player player={player1}/>
    );

    const score = findRenderedDOMComponentWithClass(component, 'player-score')

    expect(score.textContent).to.include('0')
  })
})
