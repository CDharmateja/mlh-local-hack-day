import React, { Component } from 'react';
import idb from 'idb';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      totalPrice: 0
    };
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

  componentDidMount() {
    console.log(true);
    return new Promise(async (resolve, reject) => {
      try {
        const db = await this.createDB();
        const tx = db.transaction('cart', 'readonly');
        const store = tx.objectStore('cart');
        let books = await store.getAll();
        console.log('books', books);
        books = books.map(book => this.booksHTML(book.name, book.price));
        this.setState({
          books
        });
        resolve('state is updated');
      } catch(error) {
        console.log(error);
        reject(error.stack);
      }
    })
  }

  booksHTML(name, price) {
    return (
      <li key={name}>
        <div>{name}</div>
        <div>{price}</div>
      </li>
    );
  }

  render() {
    if (this.state.books) {
      return (
        <div>
          <h2>Books in the Cart are:</h2>
          <ul className="cart-list">
            {this.state.books}
          </ul>
          <button>Buy</button>
        </div>
      );
    }
  }
}

export default Cart;