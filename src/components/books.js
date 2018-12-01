import React, { Component } from 'react';
import idb from 'idb';

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

  createDB() {
    /* eslint-disable */
    return idb.open('books-store', 1, (upgradeDB) => {
      switch(upgradeDB.oldVersion) {
        case 0:
          upgradeDB.createObjectStore('cart', {
            keyPath: 'id',
            autoIncrement: true
          });
      }
    })
    /* eslint-enable */
  }

  booksHTML(name, description) {
    console.log(name, description);
    return (
      <li>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <h2>{name}</h2>
        <p>{description}</p>
        <button onClick={() => this.AddBookToDB(name, 0)}>Details</button>
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

  AddBookToDB(name, price) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await this.createDB();
        const tx = db.transaction('cart', 'readwrite');
        const store = tx.objectStore('cart');
        store.add({
          name,
          price
        });
        resolve('Successfully added to store');
      } catch(error) {
        console.log(error);
        reject(error.stack);
      }
    })
  }

  render() {
    return (
      <div>
        <h3>Add new book</h3>
        <form class="add-book" onSubmit={this.handleAddBook}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={this.state.value} onChange={this.handleNameChange} />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input id="description" value={this.state.description} onChange={this.handleDescriptionChange} type="text"/>
          </div>
          <button>Add book</button>
        </form>
        <h3>Books</h3>
        <ul className="books-list">
          { this.state.books }
        </ul>
      </div>
    );
  }
}

export default Books;