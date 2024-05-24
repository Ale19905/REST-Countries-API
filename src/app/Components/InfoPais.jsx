import Image from "next/image"

export default function InfoPais({pais}){
    
   

    return(
        <div className=" sm:text-3xl ">
                <Image
                    src={pais.flags.svg}
                    width={'340'}
                    height={'20'}
                    alt="flag"
                    className="rounded-t-lg"
                />

            <div className="p-4 w-full flex flex-col justify-center text-lg gap-2 h-full font-semibold">
                <h3 className="font-bold text-xl">{pais.name.common}</h3>
                <h3>Native Name: <span className="font-light">{pais.name.official}</span> </h3>
                <h3>Population: <span className="font-light">{pais.population}</span> </h3>
                <h3>Region: <span className="font-light">{pais.continents}</span></h3>
                <h3>Sub Region: <span className="font-light">{pais.subregion}</span></h3> 
                <h3>Capital: <span className="font-light">{pais.capital}</span></h3>

                
                
                
                        

                
            </div>

        </div>
    )
}