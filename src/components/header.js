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
  navItemContainer: {
    width: '300px',
    marginLeft: '-25%',
  },
  navItem: {
    fontSize: '2em',
    margin: '0% 4% 0% -1%',
    display: 'inline-block',
  },
  link: {
    color: '#0ABE01',
  },
  active: {
    backgroundColor: '#f0ae35',
    color: 'white',
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
        <NavbarBrand href="/demoApp/">
          <img className="w-25" src={logo} alt="Logo" />
        </NavbarBrand>
        <NavbarToggler
          className="navbar-toggler ml-auto mr-5"
          onClick={toggle}
        />
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
