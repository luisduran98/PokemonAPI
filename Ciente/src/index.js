import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
// import { Provider } from 'react-redux'
// import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>, // Agrega una coma aquí
  document.getElementById('root')
);
