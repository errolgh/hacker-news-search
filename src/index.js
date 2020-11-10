import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { rootReducer } from './redux/reducers'


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


// let store = createStore(search)
// display in console:
// store.subscribe(() => console.log(store.getState))   // not really needed for redux but just so we can see whats going on.
//DISPATCH -> executes the actions to the reducer. the store is going to check what to do, then the store object gets updated
// store.dispatch(getResults())




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();