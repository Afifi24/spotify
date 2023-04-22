import React, { useState } from 'react'
import {BiHome} from 'react-icons/bi'
import {BsMusicNoteList} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {IoIosPeople} from 'react-icons/io'
import {TbTopologyFullHierarchy} from 'react-icons/tb'

const SideBar = () =>{ 
  const [active,setActive] = useState('home')
  return(

    <div className=' hidden md:block navbarbg col-span-1  text-slate-400 px-4 py-6'>
     <div className='flex items-center uppercase font-bold justify-center flex-col'><BsMusicNoteList className='text-4xl'/>music</div>
     <ul className=' hidden mt-20 md:flex flex-col gap-8'>
         <li onClick={()=>setActive('home')}  className={`flex ${active === 'home'?'text-white':''} cursor-pointer gap-1 items-center`}> <BiHome className='text-2xl'/> Home</li>
         <li onClick={()=>setActive('search')} className={`flex ${active === 'search'?'text-white':''} cursor-pointer gap-1 items-center`}> <BiSearch className='text-2xl'/>Search</li>
         <li onClick={()=>setActive('artists')} className={`flex ${active === 'artists'?'text-white':''} cursor-pointer gap-1 items-center`}> <IoIosPeople className='text-2xl'/> Top Artists</li>
         <li onClick={()=>setActive('charts')} className={`flex ${active === 'charts'?'text-white':''} cursor-pointer gap-1 items-center`}> <TbTopologyFullHierarchy className='text-2xl'/> Top Charts</li>
     </ul>
       
    </div>
  )
}


export default SideBar