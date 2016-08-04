import React from 'react';
import {connect} from 'react-redux';
import {StartContainer} from './Start';
import {GameContainer} from './Game';
import * as actionCreators from '../action_creators';


export class App extends React.Component{

  render(){

    return(
      <div>
        {this.props.rules ? <GameContainer/> : <StartContainer/>}
      </div> 
    )
  }
}

function mapStateToProps(state) {
  return {
    rules: state.get('rules')
  };
}

export const AppContainer = connect(
  mapStateToProps
)(App);
