import React from 'react'
import Discover from '../components/Discover'
import Search from '../components/Search'
const SearchDiscover = () => {
  return (
    <div className=' discoverbg col-span-1 md:col-span-3' >
        <Search/>
        <Discover/>
    </div>
  )
}

export default SearchDiscover