import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from './containers/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

require('./style.css');

const store = createStore(reducer);
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
)
