import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'
import { BrowserRouter } from 'react-router-dom';
import Carousel from './Components/crousel/Carousel';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <App /> */}
  <Carousel/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


