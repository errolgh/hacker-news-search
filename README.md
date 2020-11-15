# Hacker News Search
This SPA features the [Hacker News Algolia API.](https://hn.algolia.com/api/)

## Install
### Local environment:
```
git clone https://github.com/errolgh/hacker-news-search.git
npm i
npm start
```

### Hosted on Netlify:
[Hacker News App :rocket:](https://cranky-stonebraker-12c9f2.netlify.app/) 

## User Stories and Case Study
### Deliverables:
A user launches the application and the top stories from the Hacker News Algolia API renders.

A user's search history is stored in a state object.

### Quality of Life Features:
A user's search history has full CRUD capabilities. Recent searches can be revisited and individually deleted. The entire recent search history can also be deleted.

A user is knows their current search term, how many results have been returned, and how many terms they have searched for.

A user can "navigate" back to the top stories without triggering another request to the API.

### Use Case:
Redux has 3 principles:

The first rule states that there is a single source of truth for the state object. The trade off for having a single, easy-to-render state is writing more boiler plate-- which may be heavy-handed for smaller applications, but can actually save time for larger builds.

The second principle of Redux is that state is read-only. One does not "change" the existing state in a Redux store. Anytime a piece of state needs to different than it currently is, a new state object is created. Redux will compare the previous state object with an incoming one, and only produce a rerender if the strict comparison finds that the two objects are stored at different locations in memory (even if the keys and values are identical. This provides high-fidelity state while building your application-- state will never actually be mutated.

The final principle asks that "changes" are to be made with pure functions. The only way state should be changed is with Redux reducers. They make copies of the previous state object to work with in order to return a new state object. The new state object is determined by dispatched Redux actions.

In conclusion, the main perceived benefit to using Redux with React is never needing to pass down props through the component hierarchy. It removes the feel of traversing a tree potentially several nodes deep in order to render data in your app. With the use of Redux and React Hooks, state no longer flows up or down and React components feel omniscient.

## About this Project

Built with:\
[ReactJS](https://reactjs.org/)\
[React Redux](https://redux.js.org/)\
[React Hooks](https://reactjs.org/docs/hooks-intro.html/)\
[Thunk middleWare](https://github.com/reduxjs/redux-thunk/)\
[Axios node module](https://www.npmjs.com/package/axios/)

There was no focus on styling the UI beyond visual sanity. The goal for this repo was to explore some of the core concepts of Redux and work with some in vogue React features.
