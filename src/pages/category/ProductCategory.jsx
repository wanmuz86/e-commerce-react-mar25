import React from 'react'
import './ProductCategory.css'
import Banner from '../../components/banner/Banner'
const ProductCategory = ({title, subtitle, image}) => {
  return (
    <div>
        <Banner title={title} subtitle={subtitle} image={image}/>
    </div>
  )
}

export default ProductCategory