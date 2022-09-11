import {nanoid} from "nanoid";
import { useEffect, useState } from 'react';
import './App.css';
import NoteList from './Component/NoteList';
import Search from "./Component/Search";
import Header from "./Component/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[notes,SetNotes] =useState([
    {
    header:"Heading 1",
    tagline:"Front Note",
    text:"This is the first note",
    id:nanoid(),
    date :"05/09/2022"
  },
  {
    header:"Heading 2",
    tagline:"Second Note",
    text:"This is the Second note",
    id:nanoid(),
    date :"05/09/2022"
  },
  { 
    header:"Heading 3",
    tagline:"Third Note",
    text:"This is the third note",
    id:nanoid(),
    date :"05/09/2022"
  },
  {
    header:"Heading 4",
    tagline:"Fourth Note",
    text:"This is the fourth note",
    id:nanoid(),
    date :"05/09/2022"
  }

])

const [searchText,setSearchText]=useState("");
const [DarkMode,setDarkMode]=useState(false);
const [addNote,SetaddNote]=useState(false);

const Addnote=(header,tag,text)=>{
 const date =new Date();
 const newNote={
  header:header,
  tagline:tag,
  id:nanoid(),
  text:text,
  date:date.toLocaleDateString()
 };
  const newNotes = [...notes,newNote];
  SetNotes(newNotes);
}


 const deleteNote = (id)=>{
  const filteredNote = notes.filter((n)=>n.id !== id);
  SetNotes(filteredNote);
}



  return (
    <div className={`${DarkMode && "dark-mode"} `}>
    <div className='container' >
      <Header handleDarkMode={setDarkMode} addnoteHandler={SetaddNote}/>
      <Search handleSearchNote ={setSearchText} />
      <NoteList notes ={notes.filter((note)=> note.header.toLowerCase().includes(searchText))} addnote={Addnote} deleteNoteHandler = {deleteNote} setaddNote={addNote}/>
    </div>
    </div>
  );
}

export default App;
 