import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HabitService from './service/habitService';

const baseUrl = 'http://localhost:8080';
const habaitService = new HabitService(baseUrl);

ReactDOM.render(
  <App habitService={habaitService} />,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);
