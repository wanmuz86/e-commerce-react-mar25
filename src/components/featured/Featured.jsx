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
            : 
            <div className="row row-gap-3">
            {
                data?.map(val=>    // ?. (if it is not nul)
               <div className='col-3' key={val.id}>
                 <Card product={val}/>
                </div>
            )
            }
             </div>
             }
    </div>
  )
}

export default Featured