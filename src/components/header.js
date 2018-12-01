import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        Header
        <Link to='/'>Landing</Link>
        <Link to='/books'>Books</Link>
      </header>
    )
  }
}

export default Header;