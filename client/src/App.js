import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPlus, faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';
import PostIts from './components/PostIts';

library.add(faPlus, faTrashAlt, faEdit);

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={PostIts} />
      <Route exact path="/postits" component={PostIts} />
    </Switch>
  </>
);

export default App;
