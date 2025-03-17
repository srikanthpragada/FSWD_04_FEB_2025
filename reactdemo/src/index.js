import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Passengers from './state/Passengers';
//import reportWebVitals from './reportWebVitals';

const products = [ 
    { name : 'iPhone 16', price : 100000},
    { name : 'Bose Headphones', price : 30000},
    { name : 'Logitech Mouse', price : 10000}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Passengers />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
