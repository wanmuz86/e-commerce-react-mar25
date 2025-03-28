import React from 'react'
import './Home.css'
import Banner from '../../components/banner/Banner'
import banner1 from '../../assets/banner1.jpg'
import Featured from '../../components/featured/Featured'
const Home = () => {
  return (
    <div>
        <Banner title="Lazamall" subtitle="Shop till you drop" image={banner1}/>
        <h2 className='mt-3'>Featured product</h2>
        <Featured/>
    </div>
  )
}

export default Home