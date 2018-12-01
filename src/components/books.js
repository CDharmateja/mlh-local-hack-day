import React, { Component } from 'react';

// import Cart from './cart';

import { Link } from 'react-router-dom';

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      name: '',
      description: ''
    };

    this.booksHTML = this.booksHTML.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  componentDidMount() {
    const books = [];
    for (let i = 0; i < 10; i++) {
      books.push(this.booksHTML('name', 'this is descriptions'));
    }
    this.setState({
      books
    })
  }

  booksHTML(name, description) {
    console.log(name, description);
    return (
      <li>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <h2>{name}</h2>
        <p>{description}</p>
        <button>Details</button>
      </li>
    );
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleAddBook(e) {
    e.preventDefault();
    console.log(this.state.name, this.state.description);
    const book = this.booksHTML(this.state.name, this.state.description);
    console.log('book', book);
    this.state.books.unshift(book);
    this.setState({
      books: this.state.books
    });
    console.log(this.state);
  }

  render() {
    return (
        <div>
        <form onSubmit={this.handleAddBook}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={this.state.value} onChange={this.handleNameChange} />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input id="description" value={this.state.description} onChange={this.handleDescriptionChange} type="text"/>
          </div>
          <button>Add Book</button>
        </form>
        <ul>
          { this.state.books }
        </ul>
      </div>
    );
  }
}

export default Books;