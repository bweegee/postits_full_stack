import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPlus, faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';
import PostIts from './components/PostIts';

library.add(faPlus, faTrashAlt, faEdit);

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={PostIts} />
      <Route path="/postits" component={PostIts} />
    </Switch>
  </Fragment>
);

export default App;
