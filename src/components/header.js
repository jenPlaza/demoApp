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
    [theme.breakpoints.up('sm')]: {
      marginTop: '5%',
    },
  },
  navBrand: {
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      width: '30%',
    },
    [theme.breakpoints.up('md')]: {
      width: '25%',
      height: '200px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '20%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '15%',
    },
  },
  navItemContainer: {
    width: '355px',
    margin: '12% 5%',
    [theme.breakpoints.up('sm')]: {
      width: '400px',
      margin: '10% -5%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '10% 12%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '600px',
      margin: '10% 0% 0% 30%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '800px',
      margin: '10% 0% 0% 42%',
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
        <NavbarBrand href="/demoApp/" className={classes.navBrand}>
          <img className="w-50 float-left" src={logo} alt="Logo" />
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
