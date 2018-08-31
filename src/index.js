import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('main'));
registerServiceWorker();
