import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import logo from '../images/green-handprint-md.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: '100%',
    padding: '3% 5% 3% 4%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '5%',
    },
  },
  navBrand: {
    width: '50%',
    float: 'left,',
  },
  navItemContainer: {
    width: '355px',
    float: 'right',

    [theme.breakpoints.up('sm')]: {
      width: '400px',
    },
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {
      width: '600px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '800px',
    },
  },
  navItem: {
    fontSize: '2em',
    margin: '0% 4% 0% 2%',
    display: 'inline-block',
  },
  link: {
    color: '#0ABE01',
  },
}));

//exporting a class footer
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const classes = useStyles();
  return (
    <div>
      <Navbar color="transparent" light expand="md" className={classes.navbar}>
        <NavbarBrand
          style={{ color: '#2b9348', fontSize: '2em' }}
          href="/demoApp/"
          className={classes.navBrand}
        >
          <b>LOGO</b>
        </NavbarBrand>
        <NavbarToggler className="navbar-toggler ml-auto" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto">
            <div className={classes.navItemContainer}>
              {/* HOME */}
              <NavItem className={classes.navItem}>
                <Link to="/demoApp/" className={classes.link}>
                  Home
                </Link>
              </NavItem>

              {/* ABOUT */}
              <NavItem className={classes.navItem}>
                <Link to="/demoApp/about" className={classes.link}>
                  About
                </Link>
              </NavItem>

              {/* BLOG */}
              <NavItem className={classes.navItem}>
                <Link to="/demoApp/blog" className={classes.link}>
                  Blog
                </Link>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
