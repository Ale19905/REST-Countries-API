'use client'

import { useEffect, useState } from "react";

export default function useFetch(){
    
   
    
    const [data, setData] = useState()
    
    useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then((res) => res.json())
        .then((response) => {
            setData(response)
            console.log(response)
       })
        .catch((error) => console.log('fetch error', error))

    },[])
    
    return { data }
    
}