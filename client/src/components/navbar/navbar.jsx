import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// importuojam modulini individualu css
import navStyles from './navbar.module.css';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className={navStyles.navbar}>
        <Link className="logo" to="/">
          ReactApp
        </Link>
        <div className="">
          <Link className={navStyles.navLink} to="/">
            Home
          </Link>
          <Link className="nav-link" to="/todos">
            Todos
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/contact">
            Contact Us
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
