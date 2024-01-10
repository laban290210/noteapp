import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as AddBtn} from '../../assets/add.svg'

const AddButton = () => {
  return (
    <Link to="note/new" className=''>
        <AddBtn className='bg-[#f68657] absolute bottom-6 right-4 p-1  border-none w-[40px] h-[40px] rounded-[50%] flex items-center justify-center cursor-pointer shadow-[1px_1px_10px_rgba(0,0,0,0.2)]'/>
        
    </Link>
    
  )
}

export default AddButton