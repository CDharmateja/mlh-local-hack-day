import React, { Component } from 'react';

class Books extends Component {
  booksHTML() {
    return (
      <li>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <h2>Books</h2>
        <p>This is description</p>
        <button>Details</button>
      </li>
    );
  }

  render() {
    const books = [];
    for (let i = 0; i < 10; i++) {
      books.push(this.booksHTML());
    }
    return (
      <div>
        This is books component
        <ul>
          { books }
        </ul>
      </div>
    );
  }
}

export default Books;