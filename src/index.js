import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Dashboard from './Dashboard';

import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider>
    <Dashboard store={store} />
  </Provider>, 
document.getElementById('root'));
registerServiceWorker();

console.log(store.getState());