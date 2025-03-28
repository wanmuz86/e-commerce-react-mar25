import axios from "axios";
import { useEffect, useState } from "react";

// Creating a custom hook, called useFetch that will take url as parameter
const useFetch = (url)=>{

    // To save the retrieved data
    const [data, setData] = useState(null)

    // Error state
    const [error,setError] = useState(false);

    // loading state
    const [loading,setLoading] = useState(false)


    // Everytime there is a change in url, this will be called
    useEffect(()=>{

        // Function definition
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await axios.get(url)
                if (response.status !== 200){
                    setError(true)
                }
                else {
                    setData(response.data)
                }
            }
            catch (err){
                setError(true)
            }
            setLoading(false)
        }
        
        // Function invocation
        fetchData(url)

    },[url])

    // after API call
    return {data,error,loading}
}