import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './app/layout/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
       <App />
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
