import React from 'react'
import About from '../../Components/About'
import Categories from '../../Components/Categories'
import Header from '../../Components/Header-component'
import Slidder from '../../Components/SlidderComponent/index.js'

const Home = () => {
  return (
    <div className='container'>
        <Header/>
        <Slidder />
        <About />
        <Categories />
    </div>
  )
}

export default Home
