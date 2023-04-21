import React from 'react'
import SideBar from '../components/SideBar'
import ChartsArtists from './ChartsArtists'
import SearchDiscover from './SearchDiscover'
const Home = () => {
  return (
    <div className=' flex flex-col md:grid md:grid-cols-5 h-screen md:overflow-y-hidden'>
      <SideBar  />
      <SearchDiscover  />
      <ChartsArtists  />
      </div>

  )
}

export default Home