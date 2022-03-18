import React from 'react'
import About from '../../Components/About'
import Categories from '../../Components/Categories'
// import Header from '../../Components/Header-component'
import HeaderRes from '../../Components/Header-component/Header'
import Products from '../../Components/Product/Products'
import CarouselSlider from '../../Components/SlidderComponent/Carousel'
// import Slidder from '../../Components/SlidderComponent/index.js'

const Home = () => {
  return (
    <div className='container'>
        <HeaderRes/>
        <CarouselSlider />
        <About />
        <Categories />
        <Products />
    </div>
  )
}

export default Home
