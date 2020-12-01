import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import ScrollToTop from './app/layout/ScrollToTop';

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ScrollToTop>
       <App />
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
