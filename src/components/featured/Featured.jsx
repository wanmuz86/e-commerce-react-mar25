import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import Card from '../card/Card'

const Featured = () => {

    const url = "https://fakestoreapi.com/products?limit=6"

    // retrieve the result from usefech hook
    const {data,error, loading} = useFetch(url)

  return (
    <div>
        {
            error ?
            <p>Something is wrong</p>
            : loading 
            ? <p>Loading....</p>
            : data?.map(val=>    // ?. (if it is not nul)
                <Card product={val} key={val.id}/>
                
                )
        }
    </div>
  )
}

export default Featured