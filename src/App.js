import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Landing from './components/landing';
import Footer from './components/footer';
import Books from './components/books';

import { Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact={true} path="/" component={Landing} />
        <Route path="/books" component={Books} />
        <Footer />
      </div>
    );
  }
}

export default App;
