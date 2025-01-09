import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the updated import
import App from './App';
import './index.css'; // Adjust the path to your CSS file


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
