import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'


//STORE -> a globalized state. holds all the data or state for our application
// const store = createStore(rootReducer?) ????

//ACTION -> as in type. this will be the plain language, what-do-you-want-to-change piece
// const searchStories = () => {
//   return {
//     type: "SEARCH_STORIES",
//     payload: query
//   }
// }

// const addQuery = () => {
//   return {
//     type: "ADD_QUERY",
//     payload: query
//   }
// }

// const clearQuery = () => {
//   return {
//     type: "CLEAR_QUERY",
//     payload: query
//   }
// }

//REDUCER -> describes how your state (store) will change based on what type of action is used OKAY HONESTLY A REDUCER IS JUST A PIECE OF STATE
// const searchBar = (state = "", action) => {        //idk if I should be tracking this reducer... need to look for conventions online.
//   switch(action.type) {
//     case "SEARCH_STORIES":
//       return setData(data)   //?????
//     case "ADD_QUERY":
//       return setHistory( [...query, history] )   //?????
//     case "CLEAR_QUERY":
//       return setState("")  ////???? okay, so they piece of state I'm really trying to create here is the searchBar value.
//       //Not all these actions will relate to the searchBar value. I'll need different reducers for results array, history array!
//   }
// }

// let store = createStore(searchBar)
// display in console:
// store.subscribe(() => console.log(store.getState))   // not really needed for redux but just so we can see whats going on.
//DISPATCH -> executes the actions to the reducer. the store is going to check what to do, then the store object gets updated
// store.dispatch(searchStories())




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