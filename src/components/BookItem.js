import React from 'react';
import { useBookItemContext } from './BookItemContext';

const BookItem = ({book}) => {
  const {id, volumeInfo} = book;
  const {title, authors, imageLinks} = volumeInfo;
  const {thumbnail} = imageLinks;
  const {addBookToUserLibrary} = useBookItemContext();


  // const dropdownMenu = (
  //   <div>
  //     <ol>
  //       <button onclick="dosomething">Currently Reading</button>
  //       <button onclick="dosomething">Want to Read</button>
  //       <button onclick="dosomething">Read</button>
  //     </ol>
  //   </div>
  //   );
  
  // const displaydropdownMenu = false;

  return(
    <>
      <p>title: {title}</p>
      <p>author: {authors?authors[0]:""}</p>
      <img src={thumbnail} alt={id}></img>
      <button onClick={() => addBookToUserLibrary(book, "read")}>Add Book To Read</button>
    </>
  )
}

export default BookItem;