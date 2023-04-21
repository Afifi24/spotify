import React from 'react'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import Genre from './Genre'
const Discover = () => {
  return (
    <div className='text-white mt-4 pt-6 pb-32 px-10 flex overflow-y-scroll h-screen flex-col gap-10 '>
     <div className='flex items-center justify-between'>
     <h1 className='text-2xl font-bold'>Home</h1>
      <Genre/>
     </div>
     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10  gap-x-4 cursor-pointer  '>
         <div className='navbarbg p-3 rounded-lg flex items-start justify-start flex-col gap-3'>
             <img className='min-h-[170px] w-full  rounded-md' src={img1} alt="" />
              <h2>artist name</h2>
              <p>description</p>
         </div>
         <div className='navbarbg p-3 rounded-lg flex items-start justify-start flex-col gap-3'>
             <img className='min-h-[170px] w-full  rounded-md' src={img1} alt="" />
              <h2>artist name</h2>
              <p>description</p>
         </div>
         <div className='navbarbg p-3 rounded-lg flex items-start justify-start flex-col gap-3'>
             <img className='min-h-[170px] w-full  rounded-md' src={img1} alt="" />
              <h2>artist name</h2>
              <p>description</p>
         </div>
         <div className='navbarbg p-3 rounded-lg flex items-start justify-start flex-col gap-3'>
             <img className='min-h-[170px] w-full  rounded-md' src={img1} alt="" />
              <h2>artist name</h2>
              <p>description</p>
         </div>
         <div className='navbarbg p-3 rounded-lg flex items-start justify-start flex-col gap-3'>
             <img className='min-h-[170px] w-full  rounded-md' src={img1} alt="" />
              <h2>artist name</h2>
              <p>description</p>
         </div>
         <div className='navbarbg p-3 rounded-lg flex items-start justify-start flex-col gap-3'>
             <img className='min-h-[170px] w-full  rounded-md' src={img1} alt="" />
              <h2>artist name</h2>
              <p>description</p>
         </div>
         <div className='navbarbg p-3 rounded-lg flex items-start justify-start flex-col gap-3'>
             <img className='min-h-[170px] w-full  rounded-md' src={img1} alt="" />
              <h2>artist name</h2>
              <p>description</p>
         </div>
         <div className='navbarbg p-3 rounded-lg flex items-start justify-start flex-col gap-3'>
             <img className='min-h-[170px] rounded-md' src={img1} alt="" />
              <h2>artist name</h2>
              <p>description</p>
         </div>
     </div>
    </div>
  )
}

export default Discover