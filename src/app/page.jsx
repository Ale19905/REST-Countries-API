'use client'

import Image from "next/image";
import Fetch from "./services/useFetch";
import { useEffect, useState } from "react";
import useFetch from "./services/useFetch";
import Pais from "./Components/Pais";
import Search from "./Components/Search";
import useFetchbyName from "./services/useFetchbyName";
import Link from "next/link";


export default function Home() {


 

  const {data} = useFetch()
  const [search, setSearch] = useState(false)
  const [ countrySearched, setCountrySearched ] = useState()
  
  /*
  useEffect(() =>{
      fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((response) => {
        //let nombre = response[0].name.common;
        let json = response
        setData(json)
        console.log('data',json);
        
        })
      .catch((error) => console.log('fetch error', error))

  },[])
  */
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value);
    setSearch(true) 
    
        fetch(`https://restcountries.com/v3.1/name/${e.target[0].value}`)
        .then((res) => res.json())
        .then((response) => {
            setCountrySearched(response)
            console.log(response)
       })
        .catch((error) => console.log('fetch error', error))

        

  }
  
  const handleBack = () => {
    setSearch(false)
  }
  
  
  return (
   <main className="h-screen p-12">
      

      <form action="submit" onSubmit={handleSubmit} className="mb-6 p-6 flex items-center ">
            <img src="/search.svg" width={'30'} height={'30'} alt="" className="absolute ml-6"/>
            <input id="inputs" className="w-[600px] h-14 " type="text" placeholder="Search for country..."/>
       </form> 

      
      {!search ? (
        <ul className="flex flex-wrap gap-10 h-screen w-full items-center justify-center mt-6" >
          {data && (
            data.map((pais, index) => (
              <Link
                key={index}
                href={`/Info/${pais.name.common}`}
              >
                <li key={index} className="m-6" >
                  <Pais pais={pais}/>
    
                </li>          
              </Link>
            ))
          )}  
        </ul>
        

      ):(
        <div>
           <div className="flex items-center m-6">
              <div className="element"></div>
              <button onClick={handleBack} className="bg-slate-300 text-black text-lg w-20 h-12 flex justify-center items-center  ">Back</button>
           </div>
        <ul className="flex flex-wrap gap-10 h-full w-full items-center justify-center mt-6">
    
          {countrySearched && (
            countrySearched.map((pais,index) => (
              <Link
                key={index}
                href={`/Info/${pais.name.common}`}
                
              >
                
                <li key={index}>
                  <Pais pais={pais} />
                </li>
              </Link>
            ))
          )}

        </ul>

           </div>
      )}
      
      

   </main>
  );


}


