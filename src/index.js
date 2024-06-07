import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Header from './Components/Header';
import { Provider } from 'react-redux';
import App from './Components/App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <Provider store={store}><App /></Provider>
    
    </div>
);


