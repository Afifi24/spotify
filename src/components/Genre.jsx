import React from 'react'

const Genre = () => {
  return (
    <div>
        
        <select className='navbarbg rounded-md select option py-1 px-4 cursor-pointer outline-none flex gap-10 '>
            <option className='border-none cursor-pointer' value="">drake</option>
            <option className='border-none cursor-pointer' value="">tesla</option>
            <option className='border-none cursor-pointer' value="">montana</option>
            <option className='border-none cursor-pointer' value="">big</option>
            <option className='border-none cursor-pointer' value="">artiste</option>
            <option className='border-none cursor-pointer' value="">gims</option>
            <option className='border-none cursor-pointer' value="">soolking</option>
        </select>
    </div>
  )
}

export default Genre