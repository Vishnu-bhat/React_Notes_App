import React, { useState } from "react";
import Footer from "./Footer";
import Search from "./Search";
import CenterContent from "./CenterContent";

function CenterPage() {

  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    if (text.trim()) {
      setNotes([
        ...notes,
        { content: text, type: "text", timestamp: new Date().toLocaleString() },
      ]);
      setText("");
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <main className="col-md-10 p-4 d-flex flex-column">
      <Search></Search>
      <CenterContent notes={notes} deleteNote={deleteNote} />
      <Footer text={text} setText={setText} addNote={addNote} />
    </main>
  );
}

export default CenterPage;
