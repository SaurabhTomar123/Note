import React from 'react'
import Addnote from './Addnote'

export default function Header ({handleDarkMode,addnoteHandler}) {
  return (
    <div className='header'>
        <h1>Notes</h1>
        <div >
        <button className='header-btn' onClick={()=>addnoteHandler((prevState)=>!prevState)} >Add</button>
        <button className='header-btn' onClick={()=>handleDarkMode((prevState)=> !prevState)}>Toggle Mode</button>
        </div>
    </div>
  )
}
