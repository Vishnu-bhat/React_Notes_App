import { FaMicrophone } from "react-icons/fa";

function Footer({ text, setText, addNote }) {
    return (
      <footer className="mt-auto d-flex align-items-center gap-2 p-3 bg-light border-top">
        <button className="btn btn-danger d-flex align-items-center">
          <FaMicrophone className="me-2" /> Start Recording
        </button>
        <input
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your note"
        />
        <button className="btn btn-success" onClick={addNote}>
          Add Note
        </button>
      </footer>
    );
  }
  
  export default Footer;