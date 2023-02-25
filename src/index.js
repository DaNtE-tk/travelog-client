import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {Provider} from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';


import App from './App';
import reportWebVitals from './reportWebVitals';


//REDUX
const store = createStore(reducers, compose(applyMiddleware(thunk)));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
