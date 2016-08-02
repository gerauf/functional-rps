import React from 'react';
import ReactDOM from 'react-dom';
import {GameContainer} from './containers/Game';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

const store = createStore(reducer);
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <GameContainer />
  </Provider>,
  document.getElementById('app')
)
