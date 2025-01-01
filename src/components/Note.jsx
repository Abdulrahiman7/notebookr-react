import React, { useContext } from 'react'
import Card from './UI/Card'
import Button from './UI/Button'
import NotesContext from '../store/notes-context'

const Note = (props) => {
    const { deleteNote }=useContext(NotesContext);
    const deleteHandler=()=>{
        console.log(props.key);
        deleteNote(props.note.id);
    }
  return (
    <li>
    <Card className="note">
        <h3>{props.note.title}</h3>
        <p>{props.note.description}</p>
        <Button onClick={deleteHandler}>Delete</Button>
    </Card>
    </li>
  )
}

export default Note