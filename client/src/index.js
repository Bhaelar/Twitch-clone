import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const initialState = {};

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(reduxThunk)));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

