import React from "react";

import BookItemContext from "./BookItemContext";

import { useState } from "react";

function BookItemProvider(props){

  const [items, setItems] = useState();

  const API = "https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&maxResults=2&key=AIzaSyA0qHnVgE_9Vu3qxX2k_9A8vIdTEhALQXw";
  const headers = {
    'Accept': 'application/json',
    'Authorization': "password"
  }

  fetch(`${API}`, { headers })
  .then(res => res.json())
  .then(data => setItems(data.items))

  return(
    <BookItemContext.Provider value={{
      items
    }}>
      {props.children}
    </BookItemContext.Provider>
  );
  
};

export default BookItemProvider;