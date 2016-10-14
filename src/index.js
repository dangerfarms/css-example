import React from 'react';
import ReactDOM from 'react-dom';

/*
 * Note: fonts and index are global stylesheets. Import order matters here. They must be imported
 * before any component styles.
 */
import './fonts.css';
import './index.css';
import App from './containers/App';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
