import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<Hello greeting = {'Hello ' + 'React Ninja'}/>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
