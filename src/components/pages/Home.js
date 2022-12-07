import React, { useEffect } from "react";
import BookShelf from "../BookShelf";
import {Link} from "react-router-dom";

//import Navbar from "../Navbar";

const Home = () => {

  return(
    <div>
      <Link to="/search">Search</Link>
      <BookShelf shelf={"reading"} />
      <BookShelf shelf={"to-be-read"} />
      <BookShelf shelf={"read"} />
      {/* <BookShelf shelf={"readd"} /> */}
    </div>
  );
}

export default Home;