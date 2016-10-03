import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import JobsList from './containers/JobsList';
import Campanha from './containers/Campanha';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={JobsList} />
    <Route path="/campanhas/:slug" component={Campanha} />
  </Route>
);
