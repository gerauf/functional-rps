import React from 'react'
import Name from './Name'
import Rules from './Rules'
// import {connect} from 'react-redux';
// import * as actionCreators from '../action_creators'



export default React.createClass({
  render: function() {
    return(
      <div>
        {this.props.player1 ?
          <Rules availableRules={this.props.availableRules}
                 setRules={this.props.setRules}/> :
          <Name  {...this.props} />}
      </div>
    )
  }
})

// function mapStateToProps(state) {
//   return {
//     availableRules: state.get('availableRules')
//     player1: state.get('player1')
//   };
// }
//
// export const StartContainer = connect(
//   mapStateToProps,
//   actionCreators
// )(Voting);
