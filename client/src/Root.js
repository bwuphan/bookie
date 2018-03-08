import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import configureStore from './configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './App';
import Landing from './components/Landing/Landing';
import Callback from './components/Callback/Callback';
import Auth from './components/Auth/Auth';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const Root = () =>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} auth={Auth}/>
        <Route path="/Callback" component={Callback} auth={Auth}/>
      </Route>
    </Router>
  </Provider>;

export default Root;