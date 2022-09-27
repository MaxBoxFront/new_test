import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore, {ReduxState} from "./store/configureStore";
import reportWebVitals from "../reportWebVitals";

export const initialState: ReduxState = {};

export const {store} = configureStore(initialState)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
// @ts-ignore
window.store = store;