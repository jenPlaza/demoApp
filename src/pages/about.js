import React from 'react';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  container: {
    color: 'white',
    margin: '35% 10%',
    [theme.breakpoints.up('sm')]: {
      margin: '35% 23%',
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return <h1 className={classes.container}>ABOUT</h1>;
}
