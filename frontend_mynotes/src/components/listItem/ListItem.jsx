import React from 'react'
import { Link } from 'react-router-dom'

let getTime =(note)=>{
  return new Date(note.updated).toLocaleDateString()
}

let getTitle = (note) =>{
  let title = note.body.split('\n')[0]
  if (title.length >45){
    return title.slice(0,45)
  }
  return title
}
let getContent = (note)=>{
  let title =getTitle(note)
  let content = note.body.replaceAll('\n', ' ')
  content = content.replaceAll(title, '')

  if(content.length >45){
    return content.slice(0,45) + '...'
  }else{
    return content
  }

}

const ListItem = ({note}) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className=' mx-2   border-b-2 border-[#252629] hover:bg-[#202020] hover:ease-in'>
        <h3 className='mx-2 mb-3 pt-1 '>{getTitle(note)}</h3>
        <p className=' text-sm text-[#999] ml-2'><span className=' mr-2'>{getTime(note)}</span>{getContent(note)}</p>
      </div>
    </Link>
  )
}

export default ListItem