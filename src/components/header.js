import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';

import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
      <div className="header-right">
        <a className="active" href="#">Login</a>
        <a href="#about">About</a>
      </div>
      <h1 className="heading">Book's Store</h1>
      <Link to='/books' className="all-books">All books</Link>
    </header>
    )
  }
}
export default Header;