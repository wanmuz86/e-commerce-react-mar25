import React from 'react'
import { useFetch } from '../../hooks/useFetch'

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
                <li key={val.id}>{val.title}</li>)
        }
    </div>
  )
}

export default Featured