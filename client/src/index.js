import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Root from './Root';
import 'bootstrap/dist/css/bootstrap.min.css';


// Auth0 API Keys -- file part of .gitignore
// import AUTH0 from './config/auth0';

ReactDOM.render(<Root />, document.getElementById('root'));
