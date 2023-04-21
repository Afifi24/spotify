import React from 'react'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img1 from '../images/1.jpg'
import img5 from '../images/5.jpg'
const TopCharts = () => {
  return (
    <div className='flex h-1/2 overflow-y-scroll flex-col gap-4'>
      <h1 className='font-bold text-xl text-white'>Top Charts</h1>
      <div className='pl-3 pb-4 flex flex-col gap-4'>
          <div className=' cursor-pointer flex gap-2 items-center'>
            <h1>1.</h1>
             <img className='max-w-[60px] min-h-[60px]' src={img2} alt="" />
             <div className='flex flex-col'>
              <h3 className='text-sm text-white font-bold'>Yours</h3>
              <p className='text-[10px]'>jiinn</p>
             </div>
          </div>
          <div className='flex cursor-pointer gap-2 items-center'>
            <h1>2.</h1>
             <img className='max-w-[60px] min-h-[60px]' src={img3} alt="" />
             <div className='flex flex-col'>
              <h3 className='text-sm text-white font-bold'>Under the influence</h3>
              <p className='text-[10px]'>Cris Brown</p>
             </div>
          </div>
          <div className='flex cursor-pointer gap-2 items-center'>
            <h1>3.</h1>
             <img className='max-w-[60px] min-h-[60px]' src={img4} alt="" />
             <div className='flex flex-col'>
              <h3 className='text-sm text-white font-bold'>Yours</h3>
              <p className='text-[10px]'>jiinn</p>
             </div>
          </div>
          <div className='flex gap-2 cursor-pointer items-center'>
            <h1>4.</h1>
             <img className='max-w-[60px] min-h-[60px]' src={img1} alt="" />
             <div className='flex flex-col'>
              <h3 className='text-sm text-white font-bold'>Yours</h3>
              <p className='text-[10px]'>jiinn</p>
             </div>
          </div>
          <div className='flex gap-2 cursor-pointer items-center'>
            <h1>5.</h1>
             <img className='max-w-[60px] min-h-[60px]' src={img5} alt="" />
             <div className='flex flex-col'>
              <h3 className='text-sm text-white font-bold'>Yours</h3>
              <p className='text-[10px]'>jiinn</p>
             </div>
          </div>
      </div>
    </div>
  )
}

export default TopCharts