import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//pages
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Header from './components/header';

import { makeStyles } from '@material-ui/core';

/* platform sizes
xs = 375 px,
  sm = 768 px,
  md = 992 px,
  lg = 1500 px,
  xl = 2000 px, */

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#2b9348',
    border: '15px solid #d4d700',
    borderRadius: '50%',
    width: '50%',
    height: '180px',
    margin: 'auto',
    marginTop: '5%',
    [theme.breakpoints.up('sm')]: {
      width: '35%',
      height: '230px',
    },
    [theme.breakpoints.up('md')]: {
      width: '25%',
      marginLeft: '35%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '18%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '13%',
    },
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
