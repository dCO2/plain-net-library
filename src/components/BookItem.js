import React from 'react';
import { useBookItemContext } from './BookItemContext';

const BookItem = ({book, page}) => {
  const {id, volumeInfo} = book;
  const {title, authors, imageLinks} = volumeInfo;
  const {thumbnail} = imageLinks;
  const {addBookToUserLibrary, moveBookInUserLibrary, deleteBookFromUserLibrary} = useBookItemContext();
  let actionMenu = null;

  if(page === "SEARCH_PAGE"){
    actionMenu = (
    <div className='card-right-dropdown-content'>
      <button onClick={() => addBookToUserLibrary(book, "read")} className="button">
      <span style={{fontSize: "0.8em"}}>Add To Read</span>
      </button>
      <button onClick={() => addBookToUserLibrary(book, "to-be-read")} className="button">
        <span style={{fontSize: "0.8em"}}>Add To To-Be-Read</span>
      </button>
      <button onClick={() => addBookToUserLibrary(book, "reading")} className="button">
        <span style={{fontSize: "0.8em"}}>
        Add To Reading
        </span>
      </button>
    </div>
    );
  }else if(page === "HOME_PAGE"){
    actionMenu = (
    <div className='card-right-dropdown-content'>
      <button onClick={() => moveBookInUserLibrary(book, "read")} className="button">
      <span style={{fontSize: "0.8em"}}>Move To Read</span>
      </button>
      <button onClick={() => moveBookInUserLibrary(book, "to-be-read")} className="button">
        <span style={{fontSize: "0.8em"}}>Move To To-Be-Read</span>
      </button>
      <button onClick={() => moveBookInUserLibrary(book, "reading")} className="button">
        <span style={{fontSize: "0.8em"}}>
        Move To Reading
        </span>
      </button>
      <button onClick={() => deleteBookFromUserLibrary(book)} className="button">
        <span style={{fontSize: "0.8em"}}>Delete</span>
      </button>
    </div>
    );
  }


  return(
    <div className='card bg-light'>
      <div className='card-left'>
        <img src={thumbnail} alt={id} style={{maxHeight: "200px"}}></img>
      </div>
      <div className='card-right'>
            <div className='card-right-title'>
              {(title.length > 80)? title.substr(0, 80) :title}
            </div>
            <div className='card-right-author'>
              <span>&emsp;</span><b>{authors?(authors[0].length > 59? authors[0].substr(0,59) :authors[0]):null}</b>
            </div>
            <div className='card-right-button'>
              <span style={{fontSize: "0.8em", textDecoration: "underline", textDecorationThickness: "0.2em", textDecorationColor: "black" }}>&emsp;<i>action menu</i></span>
              {actionMenu}
            </div>
      </div>
    </div>
  )
}

export default BookItem;