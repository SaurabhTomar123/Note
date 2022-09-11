import {MdDeleteForever} from "react-icons/md";
const Note = ({heading,tag,id,text,date ,deleteNoteHandler}) =>{
    return(
        <div className="note">
            <h1>{heading}</h1>
             <h3>#{tag}</h3>
            <span>{text}</span>
            <div className="footer">
                <small>{date}</small>
                <MdDeleteForever onClick={()=>deleteNoteHandler(id)} className="delete-icon" size ='1.3em'/>
            </div>
        </div>
    );

}
export default Note;
