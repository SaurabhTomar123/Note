import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Addnote({handleAddnote, isAdd}) {
  const [show, setShow] = useState(false);
  const[text,SetText]=useState("");
  const[header,Setheader]=useState("");
  const[tag,SetTag]=useState("");
  let characterLimit =200;

  const handleTextChange=(event)=>{
    if(characterLimit - event.target.value.length >=0){
   SetText(event.target.value);
    }
  }
  const handleTitleChange=(event)=>{
   Setheader(event.target.value);
  }
  const handleTagChange=(event)=>{
    
   SetTag(event.target.value);    
   
  }
  const handleSave =()=>{
    if(text.trim().length>0 && header.trim().length>0 && tag.trim().length){
      handleAddnote(header,tag,text);
      SetText("");
      Setheader("");
      SetTag("");
      handleClose();
    }
    else{

    }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const checkAdd=()=>{
  if(isAdd===true){
    console.log(isAdd);
    handleShow();
  }
}
  return (
    <>
     <Button onClick={handleShow} variant="primary" className='add-modal'>Addnote</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Title</Form.Label>
              <Form.Control as="textarea" rows={1} placeholder="Note Heading" value={header} onChange={handleTitleChange}/>
            </Form.Group>  
             <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Tagline</Form.Label>
              <Form.Control as="textarea" rows={1} placeholder="Tags" value={tag} onChange={handleTagChange}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Note</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Write a note" value={text} onChange={handleTextChange}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p>Word Limit:{characterLimit -text.length}</p>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addnote;


































































/*import { useState } from "react";

const Addnote = ({handleAddnote})=> {
  const[header,Setheader]=useState("");
  const[tag,SetTag]=useState("");

  const[text,SetText]=useState("");
  let characterLimit =200;

  const handleChange=(event)=>{
    if(characterLimit - event.target.value.length >=0){
   SetText(event.target.value);
    }
  }
  const handleSave =()=>{
    if(text.trim().length>0){
      handleAddnote(header,tag,text);
      SetText("");
      SetTag("");
      Setheader("");
    }
   
  }
    return(<div>
    
       <div className="note new">
        <textarea 
        rows={8}
        cols={10}
        value = {text}
        onChange={handleChange}
        placeholder = "type a new note..."
        ></textarea>
        <div className="footer">
            <small>{characterLimit - text.length} remaining</small>
            <button className="save" onClick={handleSave}>Save</button>
        </div>
    </div>
    </div>)
}

export default Addnote; */
