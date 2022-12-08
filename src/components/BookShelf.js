import React, {useEffect} from "react";
import { useBookItemContext } from "./BookItemContext";
import BookItem from "./BookItem";

const BookShelf = ({shelf}) => {

  const {state, loading, getQueriedApiLibrary} = useBookItemContext();
  const readingHeader = <h3><i>Reading</i> SHELF</h3>;
  const readHeader = <h3><i>Read</i> SHELF</h3>;
  const tobereadHeader = <h3><i>To Be Read</i> SHELF</h3>;

  let BookList = <div></div>;

  if(loading){
    return <p>Loading...</p>;
  }else{
    BookList = state.map((book) =>
    book.shelf===shelf? <BookItem key={book.id} book={book} /> :<></>
    );
  }

  return(
    <>
    {shelf==='reading'?readingHeader:<></>}
    {shelf==='to-be-read'?tobereadHeader:<></>}
    {shelf==='read'?readHeader:<></>}
    {BookList}
    </>
  );
}

export default BookShelf;