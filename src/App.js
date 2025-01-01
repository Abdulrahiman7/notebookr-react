import { useState } from 'react';
import "./App.css";
import AddForm from './components/AddForm';
import Header from './components/Header';
import NotesLists from './components/NotesLists';
import SearchBar from './components/SearchBar';
import Card from './components/UI/Card';
import { NotesContextProvider } from './store/notes-context';

function App() {
  const [enteredSearch, setEnteredSearch]=useState("");
  const [countNotes, setCountNotes]=useState({total:0, filtered:0});

  const searchChangeHandler=(event)=>{
      setEnteredSearch(event.target.value);
  }
  const noteCountUpdateHandler=(count)=>{
    setCountNotes(count);
    console.log(count);
  }
  return (
    <div className="App">
      <NotesContextProvider >
     <Header />
     <SearchBar value={enteredSearch} onChange={searchChangeHandler} />
     <div className='content'>
      <div>
      <AddForm />
      <Card><h3>total Count : {countNotes.total}</h3>
      <h3>filtered Count: {countNotes.filtered}</h3></Card>
      </div>
     
     
     <NotesLists  searchItem={enteredSearch} onUpdateNotesCount={noteCountUpdateHandler} />
     </div>
    </NotesContextProvider>
    </div>
  );
}

export default App;
