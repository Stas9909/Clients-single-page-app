export { renderBooks };

import { authors } from '../data/authors.js';
import { books } from '../data/books.js';
import { genres } from '../data/genres.js';
import { booksTBody } from './elements.js';
import { formatNameInitials } from './format.js';

// let authors = JSON.parse(localStorage.getItem('authors'));
// let books = JSON.parse(localStorage.getItem('books'));
// let genres = JSON.parse(localStorage.getItem('genres'));

function renderBooks() {
  booksTBody.innerHTML = books.map(buildRow).join('');
}

function buildRow(book) {
  const authorNames = authors.filter(author => author.books.includes(book.id)).map(formatNameInitials);
  const genreNames = genres.filter(genre => book.genres.includes(genre.id)).map(genre => genre.name);

  return `
    <tr data-id="${book.id}">
      <td>${book.title}</td>
      <td>${authorNames.join(', ')}</td>
      <td>${book.pages}</td>
      <td>${genreNames.join(', ')}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="del-btn">Remove</button>
        <button class="view-btn">Details</button>
      </td>
    </tr>
  `;
}
