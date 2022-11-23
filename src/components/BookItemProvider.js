import React from "react";
import BookItemContext from "./BookItemContext";
import { useState } from "react";

function BookItemProvider(props){

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiParamsQuery = "flowers"
  const apiParamFilter = "free-ebooks"
  const apiParamMaxResults = 2
  const apiParamKey = "AIzaSyA0qHnVgE_9Vu3qxX2k_9A8vIdTEhALQXw"
  const API = "https://www.googleapis.com/books/v1/volumes?q="+
              apiParamsQuery+"&filter="+apiParamFilter+"&maxResults="+
              apiParamMaxResults+"&key="+apiParamKey;

  const headers = {
    'Accept': 'application/json',
    'Authorization': "password"
  }

  // const getRandomBooks = async () => {

  // }

  const getQueriedBooks = async => {
    setLoading(true);
    fetch(`${API}`, { headers })
    .then(res => res.json())
    .then(data => setItems(data.items))
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return(
    <BookItemContext.Provider value={{
      items,
      getQueriedBooks,
      loading
    }}>
      {props.children}
    </BookItemContext.Provider>
  );
  
};

export default BookItemProvider;