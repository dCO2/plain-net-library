import React, {useEffect} from 'react';
import { useBookItemContext } from "../BookItemContext";
import BookItem from "../BookItem";
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
    {BookList}
    </>
    // <div>
    //   <SearchBar/>
    //   <SearchPageResults/>
    // </div>
  )
}

export default Search;