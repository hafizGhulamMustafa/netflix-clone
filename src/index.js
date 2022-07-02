import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './home';
import About from './about';
import Layout from './layout';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route index path= "/" element={<Home/>}/>
    <Route exect path= "*" element={<Layout/>}/>
    <Route exect path='/about' element={<About/>}/>
    <Route exect path='/app' element={<App/>}/>
  </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();