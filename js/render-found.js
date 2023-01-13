export { renderFound };

import { books } from '../data/books.js';
import { authors } from '../data/authors.js';
import { renderBooks } from './render-books.js';
import { renderAuthors } from './render-authors.js';

// let authors = JSON.parse(localStorage.getItem('authors'));
// let books = JSON.parse(localStorage.getItem('books'));

function renderFound(type, items) {
  const list = type == 'book' ? books : authors;
  const renderer = type == 'book' ? renderBooks : renderAuthors;
  const allItems = list.splice(0, list.length, ...items);

  renderer();

  list.splice(0, list.length, ...allItems);
}
