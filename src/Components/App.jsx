import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  function editNote(id, updatedNote) {
    setNotes(prevNotes => {
      return prevNotes.map((noteItem, index) => {
        return index === id ? updatedNote : noteItem;
      });
    });
  }
  

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* <button onClick={addNote}>add</button> */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
