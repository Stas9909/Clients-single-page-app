export { search };

import { authors } from '../data/authors.js';
import { books } from '../data/books.js';
import { genres } from '../data/genres.js';
import { formatFullName } from './format.js';

// let authors = JSON.parse(localStorage.getItem('authors'));
// let books = JSON.parse(localStorage.getItem('books'));
// let genres = JSON.parse(localStorage.getItem('genres'));

function search(type, query) {
  query = query.trim().toLowerCase();

  if (type == 'book') {
    return books.filter(book => book.title.toLowerCase().includes(query));
  }
  
  if (type == 'author') {
    const parts = query.split(' ');

    return authors.filter(author => {
      const fullName = formatFullName(author).toLowerCase();

      return parts.every(part => fullName.includes(part));
    });
  }

  if (type == 'genre') {
    const genreId = genres.find(genre => genre.name.toLowerCase() == query).id;

    return books.filter(book => book.genres.some(id => id == genreId));
  } 
}
