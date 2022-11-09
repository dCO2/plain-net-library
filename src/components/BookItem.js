import React from 'react';





const BookItem = ({thumbnail, title, misc}) => {

  return(
    <div>
      <img src={thumbnail}></img>
      <p>{title}</p>
      <select>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}