import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import gardenReducer from './reducers/gardenReducer'


import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store


let store = createStore(gardenReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root'));

