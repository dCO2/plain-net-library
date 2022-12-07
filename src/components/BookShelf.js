import React, {useEffect} from "react";
import { useBookItemContext } from "./BookItemContext";
import BookItem from "./BookItem";

const BookShelf = ({shelf}) => {

  const {state, loading, getQueriedApiLibrary} = useBookItemContext();
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
    {BookList}
    </>
  );
}

export default BookShelf;