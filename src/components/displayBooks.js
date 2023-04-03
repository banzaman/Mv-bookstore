import React from 'react';
import PropTypes from 'prop-types';

// Display incoming books
const DisplayBooks = ({ books, handleRemoveBook }) => (
  <ul>
    {books.map((book) => (
      <li key={`${book.title}-${book.author}`}>
        <span>{book.title}</span>
        {' '}
        by
        {' '}
        <span>{book.author}</span>
        <button type="button" onClick={() => handleRemoveBook(book.item_id)}>Remove</button>
      </li>
    ))}
  </ul>
);

// Prop types validation
DisplayBooks.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default DisplayBooks;
