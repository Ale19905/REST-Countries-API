'use client'

import { useState,useEffect } from "react"

export default function useFetchbyName(name){
    console.log(name);
    console.log('este nombre recibio el fetch:', name);   
    
    const [ countrySearched, setCountrySearched ] = useState()
    
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name.name}`)
        .then((res) => res.json())
        .then((response) => {
            setCountrySearched(response)
            console.log(response)
       })
        .catch((error) => console.log('fetch error', error))

    },[])

    
    return { countrySearched }
    
}