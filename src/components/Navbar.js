import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="home-page">
      <h1>
        <Link to="/"><i className="fa-solid fa-book"></i></Link>
        <span className="navbar-title"> Plain Net Library</span>
        <span className="alt-navbar-title"> PNL</span>
      </h1>
      </div>
      <SearchBar/>
      <div className="search-page">
      <h1>
        <Link style={{float:"right", textDecoration:"underline"}} to="/search"><i className="fa-solid fa-magnifying-glass"></i></Link>
      </h1>
      </div>
    </div>
  ); 
};

export default Navbar;