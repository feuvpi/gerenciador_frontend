import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
import { api } from './services/api'

axios.defaults.headers.common["Authorization"] = JSON.parse(localStorage.getItem("user")).token

api.defaults.headers.Authorization = JSON.parse(localStorage.getItem("user")).token


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
      <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

