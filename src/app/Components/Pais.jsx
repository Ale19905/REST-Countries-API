import Image from "next/image"

export default function({pais}){
    return(
        <div className="flex flex-col  bg-slate-200 rounded-lg gap-4 text-slate-950 w-60 h-[400px] shadow-xl shadow:slate-400">
            <Image
                src={pais.flags.svg}
                width={'240'}
                height={'30'}
                alt="flag"
                className="rounded-t-lg"
            />
            <div className="p-4 w-full flex flex-col justify-center text-lg gap-2 h-full ">
                <h1 className="font-bold text-xl">{pais.name.common}</h1>
                <h3 className=""> Population: <span className="font-light">{pais.population}</span> </h3>
                <h3>Region: <span className="font-light">{pais.continents}</span></h3>
                <h3>Capital: <span className="font-light">{pais.capital}</span></h3>
            </div>
            {/*
            
            */ }
        </div>
    )
}