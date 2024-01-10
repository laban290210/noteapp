import React, {useState, useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../../assets/arrow-left.svg'
import {Link} from 'react-router-dom'

const NotePage = () => {

    const {id}=useParams()
    const navigate = useNavigate()

    let [note, setNote] = useState(null)

    useEffect(()=>{
        getNote()
    },[id])

    let getNote = async()=>{
        if(id === 'new') return 
        let response = await fetch(`/api/notes/${id}/`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async()=>{
        
        fetch(`/api/notes/create/`,{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(note)
        })
    }


    let updateNote = async()=>{
        
        fetch(`/api/notes/${id}/update/`,{
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(note)
        })
    }


    let deleteNote = async()=>{
        fetch(`/api/notes/${id}/delete/`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
            
        })
        navigate('/')
    }

    let handleSubmit = () => {
        if(id !== 'new' &&  note.body ===''){
            deleteNote()
        } else if (id !== 'new') {
            updateNote()
        }
        else if(id === 'new' && note.body !== null){
            createNote()
        }
        updateNote()
        navigate('/')
    }
    

  return (
    
    <div >
        <div className='flex justify-between mr-3' > 
            
            <h3 className='flex items-center text-2xl cursor-pointer'> 
            <ArrowLeft onClick={handleSubmit} className='fill-[#f68657] w-5 mr-2'/>
            </h3>
            {id !== 'new' ? (
                <button className='mt-2 text-[#f68657] text-l font-bold' onClick={deleteNote}>DELETE</button>
            ):(
                <button onClick={handleSubmit} className='mt-2 text-[#f68657] text-l font-bold'>DONE</button>
            )}
            
            
        </div>
        <textarea onChange={(e)=>{setNote({...note, 'body':e.target.value})}} className=' dark:bg-[#2e3235] border-none outline-none p-4 resize-none h-[70vh] w-[90%]  overflow-auto' defaultValue={note?.body}></textarea>
        
    </div>
  )
}

export default NotePage