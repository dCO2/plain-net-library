import React, { useEffect } from "react";
import BookShelf from "../BookShelf";
//import Navbar from "../Navbar";
import { useBookItemContext } from "../BookItemContext";
import BookItem from "../BookItem";

const Home = () => {

  const {items, getQueriedBooks, loading} = useBookItemContext();
  let BookList = <div></div>;
  
  useEffect(() => {
    getQueriedBooks();
    // eslint-disable-next-line
  }, []);

  if(loading){
    return <p>Loading...</p>;
  }else{
    BookList = items?.map((item) =>
    <BookItem key={item?.id} book={item} />
    );
  }

  return(
    <div>
      {BookList}
      <BookShelf status="currently-reading" />
      <BookShelf status="to-be-read" />
      <BookShelf status="read" /> 
    </div>
  );
}

export default Home;