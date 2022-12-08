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
    <div className='card bg-light'>
      <div className='card-left'>
        <img src={thumbnail} alt={id} style={{maxHeight: "200px"}}></img>
      </div>
      <div className='card-right'>
        <ul>
          <li><span style={{fontSize: "0.8em"}}>Title: <span style={{fontSize: "1.5em"}}><b><i>{(title.length > 80)? title.substr(0, 80) :title}</i></b></span></span></li>
          <li><span style={{fontSize: "0.8em"}}>Author: <b>{authors?authors[0]:""}</b></span></li>
          <li><button onClick={() => addBookToUserLibrary(book, "read")}>Add Book To Read</button></li>
          <li><button onClick={() => addBookToUserLibrary(book, "to-be-read")}>Add Book To To-Be-Read</button></li>
          <li><button onClick={() => addBookToUserLibrary(book, "reading")}>Add Book To Reading</button></li>
        </ul>
      </div>
    </div>
  )
}

export default BookItem;