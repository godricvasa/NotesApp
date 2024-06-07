import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

function Note(props) {
    const [isEditing, setEditing] = useState(false);
    const [updatedNote, setUpdatedNote] = useState({ title: props.title, content: props.content });

    function handleEditClick() {
      setEditing(true);
    }

    function handleEditChange(event) {
      const { name, value } = event.target;
      setUpdatedNote(prevNote => {
        return {
          ...prevNote,
          [name]: value
        };
      });
    }

    function handleEditSubmit(event) {
      props.onEdit(props.id, updatedNote);
      setEditing(false);
      event.preventDefault();
    }

    return (
      <div className={`note ${props.completed ? 'completed' : ''}`}>
        {isEditing ? (
          <form className="create-note" onSubmit={handleEditSubmit}>
            <input className="create-note input" name="title" value={updatedNote.title} onChange={handleEditChange} />
            <textarea className="create-note textarea" name="content" value={updatedNote.content} onChange={handleEditChange} />
            <button className="create-note button" type="submit"><FontAwesomeIcon icon={faCheck} /> </button>
          </form>
        ) : (
          <>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleEditClick}><FontAwesomeIcon icon={faEdit} /></button>
            <button onClick={() => props.onDelete(props.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
            <button onClick={() => props.onToggle(props.id)}><FontAwesomeIcon icon={faCheck} /></button>
          </>
        )}
      </div>
    );
}

export default Note;
