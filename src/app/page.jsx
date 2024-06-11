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
  const [ filterCountry, setFilterCountry] = useState(null)

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
    setFilterCountry(false)
  }
  const handleSelect = (e) => {
    let region = e.target.value;
    console.log('active');
    let result = data.filter((data) => data.region === region)
    setFilterCountry(result)
    console.log('result:', result);
   //console.log('esta es la data:',data);
    
  }
  
  return (
   <main className="h-screen p-12">
      
    <div className="flex flex-col items-start justify-center gap-4 md:flex-row md:items-center md:justify-between">
        <form action="submit" onSubmit={handleSubmit} className=" sm:p-6 flex justify-start items-center ">
            <img src="/search.svg" width={'30'} height={'30'} alt="" className="absolute ml-6"/>
            <input id="inputs" className="w-[300px] sm:w-[400px]  h-14 mb-6 " type="text" placeholder="Search for a country..."/>
        </form> 

        <select onChange={handleSelect} name="opciones" className="md:flex md:items-center ml-2 w-20 border-2 border-slate-700 rounded-md p-2 md:w-40 " >
          <option disabled value="" selected hidden>Filter by region</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
    </div>




    { !search && !filterCountry ? (
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
      </ul>)
    
    :(<p></p>)
 
    }

    {search && !filterCountry ? (
      (
        <div>
          <div  onClick={handleBack} className="cursor-pointer flex items-center m-6">
             <div className="element"></div>
             <button className="bg-slate-300 text-black text-lg w-20 h-12 flex justify-center items-center  ">Back</button>
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
  
          </div>)
    ):<p></p>}

    {!search && filterCountry ?  
      (<div >
          <div onClick={handleBack} className="cursor-pointer flex items-center m-6">
            <div className="element"></div>
            <button  className="bg-slate-300 text-black text-lg w-20 h-12 flex justify-center items-center">Back</button>
          </div>
          
          <ul className="flex flex-wrap gap-10 h-screen w-full items-center justify-center mt-6">
              {filterCountry && (
                filterCountry.map((pais, index) => (
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
      ):<p></p>
      }

   </main>
  );


}


