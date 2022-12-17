import { useBookItemContext } from "./BookItemContext";

const SearchBar = () => {

  const {setApiParamsQuery, getQueriedApiLibrary} = useBookItemContext();

  return(
    <div className="search-bar">
      <form onSubmit={(e)=>{e.preventDefault(); getQueriedApiLibrary();}}>
        <input type="text" name="apiParamsQuery" placeholder="Enter Book Query.." id="apiParamsQuery" onChange={(e) => {setApiParamsQuery(e.target.value);}}></input>
      </form>
    </div>

  );
}

export default SearchBar;