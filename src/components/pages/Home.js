import React from "react";
//import { useState } from 'react';
import BookShelf from "../BookShelf";
//import Navbar from "../Navbar";
import { useBookItemContext } from "../BookItemContext";

const Home = () => {

  const {items} = useBookItemContext();


  return(
    <div>
      {
        items?.map((item) => {
          return (
            <div key={item.id}>
              <p>title: {item.volumeInfo.title}</p>
              <img src={item.imageLinks?.thumbnail} alt={item.id}></img>
            </div>
          );
        })
      }

      <BookShelf status="currently-reading" />
      <BookShelf status="to-be-read" />
      <BookShelf status="read" /> 
    </div>
  )
}

export default Home;