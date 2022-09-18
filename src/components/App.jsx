import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note, event) {
    setNotes((prevNotes) => [...prevNotes, note]);

    event.preventDefault();
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note, index) => id !== index));
  }

  return (
    <div>
      <Header />
      <CreateArea onSet={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
