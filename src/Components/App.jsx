import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Notes";
import CreateArea from "./CreateArea";

function App() {
  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  function addNote(newNote) {
    dispatch({ type: 'ADD_NOTE', payload: { ...newNote, completed: false } });
  }

  function deleteNote(id) {
    dispatch({ type: 'DELETE_NOTE', payload: id });
  }

  function editNote(id, updatedNote) {
    dispatch({ type: 'EDIT_NOTE', id, payload: updatedNote });
  }

  function toggleComplete(id) {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            completed={noteItem.completed}
            onDelete={deleteNote}
            onEdit={editNote}
            onToggle={toggleComplete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
