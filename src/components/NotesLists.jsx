import React, { useContext, useEffect } from 'react'
import NotesContext from '../store/notes-context'
import Note from './Note';
import "./NotesLists.css";
import Card from './UI/Card';

const NotesLists = (props) => {
    const {notes}=useContext(NotesContext);
    const filterednotes=notes.filter((note)=>{
        return note.title.toLowerCase().startsWith(props.searchItem.toLowerCase());
    })
    
    useEffect(()=>{
        const notesCount={
            total:notes.length,
            filtered:filterednotes.length
        }
        props.onUpdateNotesCount(notesCount);
    },[notes,filterednotes.length, props.searchItem]);
  return (
    <div>
        <ul>
            {
                (filterednotes.length > 0 ? 
                filterednotes.map((note)=>{
                   return <Note key={note.id} note={note} />
                }) : <Card> Notes not available</Card> )
            }
        </ul>
    </div>
  )
}

export default NotesLists