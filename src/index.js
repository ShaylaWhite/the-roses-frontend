import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import gardenReducer from './reducers/gardenReducer'
import App from './App';
import './App.css';


const middleware = [thunk];
//sits in the middleware to lookout for action/functions before it passes it to the reducer 
//now able to write reducers 

//create store(reducer,[preloadedState][enhancer])
//The only store enhancer that ships with Redux is applyMiddleware().

const store = createStore(gardenReducer,compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

// takes in prop of store,

ReactDOM.render(
  <Provider store={store}> 
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

  // sends to root div index.html

  //REACT-REDUX 
  //create Store accepts two arguements 1.reducer 2. dev tools, applymiddleware
  //you pass thunk to applymiddleware
  // react-redux librbary to get React & Redux talking 
  // --gives access to the component Provider
  // Provider ensures that our entire React application can potentially access data from the store. 


//React is state and props -- redux 