import React, {useState, useEffect} from 'react'
import {ListItem, AddButton} from '../../components'

 

const NotesListPage = () => {

  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes(notes)
  },[])

  let getNotes = async()=>{
    let response = await fetch('/api/notes/')
    let data = await response.json()
    console.log('Data: ',data)
    setNotes(data)
  }

  return (
    <div className=''>
      <div className='flex items-center justify-between py-2 px-4'>
        <h2 className='text-[#f68657] text-2xl'>&#9782; Notes</h2>
        <p className=' text-lg'>{notes.length}</p>
      </div>
      <div className='p-0 mt-4 h-[70vh]  overflow-y-hidden'>
        {notes.map((note, index)=>(
          
          <ListItem key={index} note={note}/>
          
        
        ))}
      </div>
      <AddButton/>
    </div>
  )
}

export default NotesListPage