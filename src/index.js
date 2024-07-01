// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './App'; // Mengimpor sebagai default

// Menerapkan Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Membuat Redux store dengan middleware dan Redux DevTools
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware() // Jika Anda menggunakan middleware, tambahkan di sini
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
