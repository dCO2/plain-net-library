import React from "react";
import Navbar from "../Navbar";

export default Home = () => {

  return(
    <div>
      <BookShelf status="currently-reading" />
      <BookShelf status="to-be-read" />
      <BookShelf status="read" /> 
    </div>
  )
}