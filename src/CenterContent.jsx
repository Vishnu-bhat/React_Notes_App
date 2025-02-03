import { FaTrash } from "react-icons/fa";

function CenterContent({ notes, deleteNote }) {
    return (
      <div className="row g-3">
        {notes.map((note, index) => (
          <div key={index} className="col-md-4">
            <div className="card p-3 shadow-sm position-relative">
              <button 
                className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2 p-1" 
                onClick={() => deleteNote(index)}
              >
                <FaTrash size={12} />
              </button>
              <div>
                <small className="text-muted">{note.timestamp}</small>
                <p className="mb-0">{note.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default CenterContent;
  
