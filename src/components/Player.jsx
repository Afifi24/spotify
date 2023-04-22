import React from 'react'
import {FaRegPlayCircle} from 'react-icons/fa'
import {GiNextButton} from 'react-icons/gi'
const Player = () => {
  return (
    <div className='h-20 z-10 fixed grid place-items-center  bottom-0 left-0 w-full  discoverbg'>
         <div className='text-white flex gap-10 text-3xl'>
            <GiNextButton className='rotate-180 cursor-pointer'/>
            <FaRegPlayCircle className='cursor-pointer'/>
            <GiNextButton className='cursor-pointer'/>
         </div>

    </div>
  )
}

export default Player