import React, { useContext, useState} from 'react'
import Input from './UI/Input'
import Button from './UI/Button';
import "./AddForm.css"
import NotesContext from '../store/notes-context';

const AddForm = () => {
    const [enteredTitle, setEnteredTitle]=useState("");
    const [enteredDescription, setEnteredDescription]=useState("");
    const [error, setError]=useState(null);
    const {addNote}=useContext(NotesContext);
    const addFormHandler=(event)=>{
        event.preventDefault();
        if(enteredTitle.trim().length ===0) 
        {
            setError("enter valid input");
            return;
        }else if(enteredDescription.trim().length ===0)
        {
            setError("enter valid description");
            return;
        }
        const note={
            id:Math.random().toString(),
            title:enteredTitle,
            description:enteredDescription
        }
        addNote(note);
        setEnteredDescription("");
        setEnteredTitle("");
    }
    const descriptionChangeHandler=(event)=>{
        setEnteredDescription(event.target.value);
    }
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }
  return (
    <div className='addNewForm'>
        <form onSubmit={addFormHandler}>
            <label htmlFor='title'>Title</label>
            <Input type="text" id="title" onChange={titleChangeHandler} value={enteredTitle} />
            <label htmlFor='description'>Description</label>
            <Input type="text" id="description" onChange={descriptionChangeHandler} value={enteredDescription}/>
            <Button type="submit">Add Notes</Button>
        </form>
    </div>
  )
}

export default AddForm;