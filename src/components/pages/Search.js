import React, {useEffect} from 'react';
import { useBookItemContext } from "../BookItemContext";
import BookItem from "../BookItem";
import {Link} from "react-router-dom";

import SearchBar from '../SearchBar';
import SearchPageResults from '../SearchPageResults';

const Search = () => {

  const {apiLibrary, getQueriedApiLibrary, loading} = useBookItemContext();
  let BookList = <div></div>;

  useEffect(() => {
    getQueriedApiLibrary();
    // eslint-disable-next-line
  }, []);

  if(loading){
    return <p>From Search Loading...</p>;
  }else{
    BookList = apiLibrary.map((book) =>
    <BookItem key={book.id} book={book} />
    );
  }

  return(
    <>
    <Link to="/">Home</Link>
    <div className='search-result'>
      {BookList}
    </div>
    </>
    // <div>
    //   <SearchBar/>
    //   <SearchPageResults/>
    // </div>
  )
}

export default Search;