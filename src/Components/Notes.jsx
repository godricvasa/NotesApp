import React,{useState} from "react";
// import DeleteIcon from "@material-ui/icons/Delete";

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
    function handleDelete(event) {
        props.onDelete(props.id);
      
      }
  
    return (
      <div className="note">
        {isEditing ? (
          <form className="create-note" onSubmit={handleEditSubmit}>
          <input className="create-note input" name="title" value={updatedNote.title} onChange={handleEditChange} />
          <textarea className="create-note textarea" name="content" value={updatedNote.content} onChange={handleEditChange} />
          <button className="create-note button" type="submit">Update</button>
        </form>
        
        ) : (
          <>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    );
  }
  

export default Note;
