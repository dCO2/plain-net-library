import { useState } from 'react';

const api = "https://reactnd-books-api.udacity.com";
let token = Math.random().toString(36);


const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAllBooks = () => {
  const [books, setBooks] = useState('');

  fetch(`${api}/books`, { headers })
  .then(res => res.json())
  .then(data => setBooks(data.books))
}

