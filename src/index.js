import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { Provider } from "react-redux";
import App from "./App";
const rootElement = document.getElementById("root");
const store = createStore(rootReducer, applyMiddleware(thunk));
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
