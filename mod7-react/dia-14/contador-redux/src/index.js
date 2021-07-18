import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./store/reducer";

// install redux
// yarn add redux react-redux

// more info
// https://redux.js.org/tutorials/essentials/part-1-overview-concepts

const store = createStore(
  combineReducers({
    counter: counterReducer,
    // podemos incluir mas cosas al estado
  }),
  // esto es para poder ver la store desde las dev tools de redux
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
