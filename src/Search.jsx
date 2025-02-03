import { FaSort } from "react-icons/fa";
function Search() {
    return (
      <header className="d-flex mb-3">
        <input className="form-control me-2" type="text" placeholder="Search" />
        <button className="btn btn-primary">
          <FaSort className="me-1" /> Sort
        </button>
      </header>
    );
  }
  
  export default Search;