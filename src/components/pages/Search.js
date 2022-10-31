import React from 'react';
import SearchBar from '../SearchBar';
import SearchPageResults from '../SearchPageResults';
import { useState } from 'react';

export default Search = () => {
  const [books, setBooks] = useState();

  return(
    <div>
      <SearchBar/>
      <SearchPageResults/>
    </div>
  )
}