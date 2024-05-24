'use client'

import { useState } from "react"
import useFetch from "../services/useFetch"
import useFetchbyName from "../services/useFetchbyName"

export default function Search(){
    
   
    const [cs, setCS] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value);
         
    }

    return(
       <form action="submit" onSubmit={handleSubmit} className="mb-6 p-6 flex items-center justify-center md:justify-start ">
            <img src="/search.svg" width={'30'} height={'30'} alt="" className="absolute ml-6"/>
            <input id="inputs" className="w-[200px] h-14  md:w-[600px] " type="text" placeholder="Search for country..."/>
       </form> 
    )
}