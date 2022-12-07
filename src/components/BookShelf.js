import React, {useEffect} from "react";
import { useBookItemContext } from "./BookItemContext";
import BookItem from "./BookItem";

const BookShelf = ({shelf}) => {

  const {state, loading, getQueriedApiLibrary} = useBookItemContext();
  let BookList = <div></div>;
  
  useEffect(() => {
    getQueriedApiLibrary();
    console.count("useEffect runs");
    // eslint-disable-next-line
  }, [state]);

  if(loading){
    return <p>Loading...</p>;
  }else{
    // console.log(shelf);
    BookList = state.map((book) =>
    <BookItem key={book.id} book={book} />
    );
    console.log(state);
    console.log("Break");
  }

  return(
    <>
    {BookList}
    </>
  );
}

export default BookShelf;