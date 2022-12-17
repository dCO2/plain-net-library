import React from "react";
import { useBookItemContext } from "./BookItemContext";
import BookItem from "./BookItem";

const BookShelf = ({shelf}) => {

  const {state, loading} = useBookItemContext();
  const readingHeader = <h2 style={{fontWeight:"normal"}}> Reading SHELF</h2>;
  const readHeader = <h2 style={{fontWeight:"normal"}}>Read SHELF</h2>;
  const tobereadHeader = <h2 style={{fontWeight:"normal"}}>To Be Read SHELF</h2>;

  let bookshelfStatus = <></>;

  let BookList = <div></div>;

  if(loading){
    bookshelfStatus =  <p>Loading...</p>;
  }else{
    BookList = state.map((book) =>
    book.shelf===shelf? <div><BookItem key={book.id} book={book} page={"HOME_PAGE"}/></div> :<></>
    );
  }

  return(
    <div className="shelf-container">
      <div className='shelf-header'>
        {bookshelfStatus}
        {shelf==='reading'?readingHeader:<></>}
        {shelf==='to-be-read'?tobereadHeader:<></>}
        {shelf==='read'?readHeader:<></>}
      </div>
      <div className='search-result'>
        {BookList}
      </div>
    </div>
  );
}

export default BookShelf;