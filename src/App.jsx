import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Header from './components/Header';
import Create from './pages/Create';
import UpdateUser from './pages/UpdateUser';

import useStyles from './style';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Header />
        <Switch>
          <Route path="/user/:_id">
            <UpdateUser />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
