import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//pages
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Header from './components/header';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#2b9348',
    border: '15px solid #d4d700',
    borderRadius: '50%',
    width: '25%',
    height: '200px',
    margin: 'auto',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <Header />
      <div className={classes.container}>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/about'}
            component={About}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/blog'}
            component={Blog}
          />
        </Switch>
      </div>
    </Router>
  );
}