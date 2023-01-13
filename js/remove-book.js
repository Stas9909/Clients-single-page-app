export { removeBook };

import { authors } from '../data/authors.js';
import { books } from '../data/books.js';

// let authors = JSON.parse(localStorage.getItem('authors'));
// let books = JSON.parse(localStorage.getItem('books'));

function removeBook(id) {
  const book = books.find(book => book.id == id);
  const bookIndex = books.indexOf(book);

  authors.forEach(author => {
    const authorBookIndex = author.books.indexOf(id);

    if (authorBookIndex == -1) return;

    author.books.splice(authorBookIndex, 1);
  });
  
  books.splice(bookIndex, 1);
}
