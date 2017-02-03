import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { scrollBefore } from './utils/routerInterceptor';

import App from './components/App';
import JobsList from './containers/JobsList';
import Campanha from './containers/Campanha';
import Arquivo from './containers/Arquivo';

export default (
  <Route path="/" component={App} onEnter={scrollBefore}>
    <IndexRoute component={JobsList}/>
    <Route path="/campanhas/:_id" component={Campanha} onEnter={scrollBefore} />
    <Route path="/arquivo" component={Arquivo} onEnter={scrollBefore} />
  </Route>
);
