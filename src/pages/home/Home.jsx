import React from 'react'
import './Home.css'
import Banner from '../../components/banner/Banner'
import banner1 from '../../assets/banner1.jpg'
const Home = () => {
  return (
    <div>
        <Banner title="Lazamall" subtitle="Shop till you drop" image={banner1}/>
    </div>
  )
}

export default Home