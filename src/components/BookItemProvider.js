import React, {useState, useReducer} from "react";
import BookItemContext from "./BookItemContext";
import BookItemActionReducer from "./BookItemActionReducer";
import {ADD_BOOK, MOVE_BOOK, DELETE_BOOK} from "./BookItemActionReducer";

function BookItemProvider(props){

  const headers = {
    'Accept': 'application/json',
    'Authorization': "password",
  }

  const [apiLibrary, setapiLibrary] = useState([]);
  const [apiParamsQuery, setApiParamsQuery] = useState("jungle");
  const [apiParamFilter, setApiParamFilter] = useState("free-ebooks");
  const [apiParamMaxResults, setApiParamMaxResults] = useState(40);
  const initialUserLibrary = [];
  const [state, dispatch] = useReducer(BookItemActionReducer, initialUserLibrary);
  const [loading, setLoading] = useState(true);

  const apiParamKey = "AIzaSyA0qHnVgE_9Vu3qxX2k_9A8vIdTEhALQXw"
  const API = "https://www.googleapis.com/books/v1/volumes?q="+
              apiParamsQuery+"&filter="+apiParamFilter+"&maxResults="+
              apiParamMaxResults+"&key="+apiParamKey;

  const getQueriedApiLibrary = async => {
    setLoading(true);
    fetch(`${API}`, { headers })
    .then(res => res.json())
    .then(data => setapiLibrary(data.items))
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const addBookToUserLibrary = (book, toShelf) => {
    book.shelf = toShelf;
    dispatch({
      type: ADD_BOOK,
      payload: book
    });
  }
  
  const moveBookInUserLibrary = (book, toShelf) => {
    book.shelf = toShelf;
    dispatch({
      type: MOVE_BOOK,
      payload: book
    });
  }

  const deleteBookFromUserLibrary = (book) => {
    dispatch({
      type: DELETE_BOOK,
      payload: book
    })
  }

  return(
    <BookItemContext.Provider value={{
      state,
      loading,
      apiLibrary,
      apiParamsQuery,
      apiParamFilter,
      apiParamMaxResults,
      setApiParamsQuery,
      setApiParamFilter,
      setApiParamMaxResults,
      getQueriedApiLibrary,
      addBookToUserLibrary,
      moveBookInUserLibrary,
      deleteBookFromUserLibrary
    }}>
      {props.children}
    </BookItemContext.Provider>
  );
  
};

export default BookItemProvider;