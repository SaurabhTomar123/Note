import Addnote from "./Addnote";
import Note from "./Note";
const NoteList =({notes ,addnote ,deleteNoteHandler,setaddNote})=>{
    const addNoteBar =()=>{
        if(setaddNote){
            return (
                <Addnote handleAddnote={addnote} isAdd={setaddNote}/>
            )
        }
    }
    return(<div className="note-list">
        {notes.map((note)=><Note heading={note.header} tag={note.tagline} id={note.id} text={note.text} date ={note.date} deleteNoteHandler={deleteNoteHandler}/>)}
        {addNoteBar()}
     
        </div>
    );
}
export default NoteList;