import React from 'react'
import Hero from '../Components/Hero'
import Herobox from '../Components/Herobox'
import Homepropety from '../Components/Homepropety'
import RecentProperty from '../Components/RecentProperty'
import FeaturedProperty from '../Components/FeaturedProperty'

const Home = () => {
  return (
    <>
      <Hero/>
      <Herobox/>
      <FeaturedProperty/>
      <RecentProperty/>
      {/* <Homepropety/> */}
    </>
  )
}

export default Home
