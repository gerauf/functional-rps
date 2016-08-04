import React from 'react'
import ReactDOM from 'react-dom'
import {expect} from 'chai'
import Arena from '../../src/components/Arena'
import {fromJS} from 'immutable'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils'


describe ('Arena component', () => {
  it('renders players choices', () => {
    const player1 = fromJS({
      name: 'sooty',
      choice: 'beanbag'
    })
    const player2 = fromJS({
      name: 'sweep',
      choice: 'tipex'
    })
    const component = renderIntoDocument(
      <Arena player1={player1}
             player2={player2}/>
    )

    const choices = scryRenderedDOMComponentsWithTag(component, 'h4')

    expect(choices[0].textContent).to.include("sooty uses beanbag")
    expect(choices[1].textContent).to.include("sweep uses tipex")
  })
})
