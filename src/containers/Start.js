import React from 'react'
import Name from '../components/Name'
import Rules from '../components/Rules'
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators'

export const Start = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.player1 ?
          <Rules {...this.props} /> :
          <Name  {...this.props} />}
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {
    availableRules: state.get('availableRules'),
    rules: state.get('rules'),
    player1: state.get('player1'),
    player2: state.get('player2')
  };
}

export const StartContainer = connect(
  mapStateToProps,
  actionCreators
)(Start);
