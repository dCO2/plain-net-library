import React, { useEffect } from "react";
import BookShelf from "../BookShelf";
//import Navbar from "../Navbar";

const Home = () => {

  return(
    <div>
      <BookShelf shelf={"reading"} />
      <BookShelf shelf={"to-be-read"} />
      <BookShelf shelf={"read"} />
      {/* <BookShelf shelf={"readd"} /> */}
    </div>
  );
}

export default Home;