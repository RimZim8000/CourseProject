import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import initiateMainStore, {mainStore } from './mainStore';


initiateMainStore();

console.log('in index.js mainStore.state is - ', mainStore.getState()|| "not set");



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


console.log('In Index.js. REACT_APP_GOOGLE_KEY is ', process.env.REACT_APP_GOOGLE_KEY);
console.log('our env is ', process.env.NODE_ENV);
console.log('our all env variables are  ', process.env);
