import React from 'react'
import {BiSearch} from 'react-icons/bi'
const Search = () => {
  return (
    <div className='flex items-center justify-center py-3  '>
       <div className='w-[60%] relative'>
             <input className='text-[10px] md:text-[14px] py-2 w-full px-10 outline-none rounded-full' placeholder='What do you want ro listen to?' type="text" />
            <BiSearch className='absolute left-3 text-2xl  top-1/2 -translate-y-1/2' />
       </div>
    </div>
  )
}

export default Search