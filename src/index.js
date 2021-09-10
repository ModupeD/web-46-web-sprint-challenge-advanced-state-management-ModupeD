import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import "./index.css";
import App from "./App";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import SmurfList from "./components/Smurf";
import Smurf from "./components/Smurf";

const { worker } = require("./mocks/browser");
worker.start();

const store = createStore(appReducer, applyMiddleware(logger));

function App() {
  return (
    <div>
      <Header />
      <AddForm />
      <SmurfList />
      <Smurf />
    </div>
  );
}
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.
