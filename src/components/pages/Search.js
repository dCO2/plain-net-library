import React, {useEffect} from 'react';
import { useBookItemContext } from "../BookItemContext";
import BookItem from "../BookItem";

const Search = () => {

  const {apiLibrary, getQueriedApiLibrary, loading} = useBookItemContext();
  let BookList = <div></div>;
  let status = <></>;

  useEffect(() => {
    getQueriedApiLibrary();
    // eslint-disable-next-line
  }, []);

  if(loading){
    status = <p style={{margin: "1em"}}>Loading...</p>;
  }else{
    BookList = apiLibrary.map((book) =>
    <div>
    <BookItem key={book.id} book={book} page={"SEARCH_PAGE"} />
    </div>
    );
  }

  return(
    <>
    {status}
    <div className='search-result'>
      {BookList}
    </div>
    </>
  )
}

export default Search;