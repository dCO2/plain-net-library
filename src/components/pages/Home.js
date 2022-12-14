import React, { useEffect } from "react";
import BookShelf from "../BookShelf";

const Home = () => {

  return(
    <div>
      <BookShelf shelf={"reading"} />
      <BookShelf shelf={"to-be-read"} />
      <BookShelf shelf={"read"} />
    </div>
  );
}

export default Home;