export { prepData };

import { authors } from '../data/authors.js';
import { books } from '../data/books.js';
import { genres } from '../data/genres.js';
import { genId } from './gen-id.js';

// let authors = JSON.parse(localStorage.getItem('authors'));
// let books = JSON.parse(localStorage.getItem('books'));
// let genres = JSON.parse(localStorage.getItem('genres'));

function prepData() {
  for (const genre of genres) {
    genre.id = idDict['g' + genre.id] = genId();
  }

  for (const book of books) {
    book.genres = book.genres.map(genreId => idDict['g' + genreId]);
    book.id = idDict['b' + book.id] = genId();
  }

  for (const author of authors) {
    author.books = author.books.map(bookId => idDict['b' + bookId]);
    author.id = genId();
  }
}

const idDict = {};
