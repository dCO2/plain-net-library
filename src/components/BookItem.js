import React from 'react';

const BookItem = ({book}) => {
  const {id, volumeInfo} = book;
  const {title, authors, imageLinks} = volumeInfo;
  const {thumbnail} = imageLinks;

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
      <p>author: {authors[0]}</p>
      <img src={thumbnail} alt={id}></img>
      {/* <button onclick="changedisplaydropdownMenutoTrue"></button> */}
    </>
  )
}

export default BookItem;