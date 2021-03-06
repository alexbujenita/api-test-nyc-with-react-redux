import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppContainer';

import store from "./store/configureStore.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
