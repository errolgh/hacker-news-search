# Hacker News Search
This SPA features the [Hacker News Algolia API](https://hn.algolia.com/api/).

## Install
### Local environment:
```
git clone https://github.com/errolgh/hacker-news-search.git
npm i
npm start
```

## User Stories and Case Study
### Deliverables:
A user launches the application and the top stories from the Hacker News Algolia API renders.

A user's search history is stored in a state object.

### Quality of Life Features:
A user's search history has full CRUD capabilities. Recent searches can be revisited and individually deleted. The entire recent search history can also be deleted.

A user can "navigate" back to the top stories without triggering another request to the API.

A user is knows their current search term, how many results have been returned, and how many terms they have searched for.

## About the Project

Built with:\
[ReactJS](https://reactjs.org/)\
[React Redux](https://redux.js.org/)\
[React Hooks](https://reactjs.org/docs/hooks-intro.html/)\
[Axios](https://www.npmjs.com/package/axios/)\
[Thunk middleWare](https://github.com/reduxjs/redux-thunk/)

There was no focus on styling the UI beyond visual sanity. The goal for this repo was to explore some of the core concepts of Redux and work with some in vogue React features.
