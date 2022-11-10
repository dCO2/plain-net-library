import React from 'react';





const BookItem = ({thumbnail, title, misc}) => {

  const dropdownMenu = (
    <div>
      <ol>
        <button onclick="dosomething">Currently Reading</button>
        <button onclick="dosomething">Want to Read</button>
        <button onclick="dosomething">Read</button>
      </ol>
    </div>
    );
  
  const displaydropdownMenu = false;

  return(
    <div>
      <img src={thumbnail}></img>
      <p>{title}</p>
      <button onclick="changedisplaydropdownMenutoTrue"></button>
      {displaydropdownMenu && dropdownMenu}
    </div>
  )
}