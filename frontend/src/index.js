import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import initiateMainStore, {mainStore } from './mainStore';


initiateMainStore();

console.log('in index.js .... mainStore.state is - ', mainStore.getState());




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
