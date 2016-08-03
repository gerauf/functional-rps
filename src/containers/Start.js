import React from 'react';
import Name from '../components/Name';
import Rules from '../components/Rules';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export class Start extends React.Component{
  render() {
    return(
      <div>
        {this.props.player1 ?
          <Rules availableRules={this.props.availableRules}
                 setRules={this.props.setRules}/> :
          <Name  setName={this.props.setName} />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    availableRules: state.get('availableRules'),
    player1: state.get('player1')
  };
}

export const StartContainer = connect(
  mapStateToProps,
  actionCreators
)(Start);
