import React, { useState } from 'react'

const NotesContext=React.createContext({
    notes:[],
    addNote:(note)=>{},
    deleteNote:()=>{},
   
});

export const NotesContextProvider=(props)=>{
    const [notes, setNotes]=useState([]);

    const addNote=(note)=>{
        setNotes((prevNotes)=> [...prevNotes, note]);
    }
    const deleteNote=(id)=>{
        setNotes((prevNotes)=> prevNotes.filter((note)=>note.id !== id));
    }
    
    const contextValue={
        notes:notes,
        addNote:addNote,
        deleteNote:deleteNote,
      
    }
    return(
        <NotesContext.Provider value={contextValue}>{props.children}</NotesContext.Provider>
    );
}

export default NotesContext;