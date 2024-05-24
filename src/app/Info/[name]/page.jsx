'use client'

import InfoPais from "@/app/Components/InfoPais"
import Pais from "../../Components/Pais"
import useFetch from "../../services/useFetch"
import useFetchbyName from "../../services/useFetchbyName"
import Link from "next/link"

export default function Info({params}){
   
     

    const { countrySearched } = useFetchbyName(params)
   
    console.log('props:',params);
    console.log('cs:', countrySearched);
    
    
    
    return(
    <div className="my-auto h-screen">

            <div className="flex items-center m-6 h-[10vh]">
                <div className="element"></div>
                <Link 
                    href={'/'}
                    className="bg-slate-300 text-black text-lg w-20 h-12 flex justify-center items-center  ">
                    Back
                </Link>
            </div>
    
    
        <div className="flex h-[80vh]">
            <ul className="flex flex-wrap gap-10 h-20 w-full items-center justify-center mt-6">
                {countrySearched ? (
                    countrySearched.map((pais, index) => (
                    <li key={index} className="m-6" >
                        <InfoPais pais={pais}/>
        
                    </li>          
                    ))
                ):
                    <p>
                    
                    <div className="flex justify-center items-center h-[80vh]">
                        <img src="/Spinner-2.gif" alt="Cargando..." />
                    </div>
                    
                    </p>
                }  
            </ul>
        </div>

    </div>
    )
    
}