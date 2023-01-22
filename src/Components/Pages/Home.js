import React from 'react'
import Cards from '../Layout/Cards'
import Carousel from '../Layout/Carousel'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'

const Home = () => {

  return (
    <div>
        <Navbar />
        <Carousel />
        <Cards />
        <Footer />
    </div>
  )
}

export default Home