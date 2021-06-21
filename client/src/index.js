import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import FetchTest from './components/fetchTest';
import 'font-awesome/css/font-awesome.css';

// BrowserRouter paduoda narsykles narsymo istorijos objekta i app
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
