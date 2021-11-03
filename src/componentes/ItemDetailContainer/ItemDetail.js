import React from "react";
import { useParams, useEffect } from "react";

 const Nosotros = () =>{
    const [equipo, setEquipo] = React.useState([])
    
    React.useEffect(() => {
        obtenerDatos()
}, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://rickandmortyapi.com/api/character')
        const user = data.json()
        console.log(user)
        setEquipo(data)
       /*  console.log(equipo) */


        
    }   
    
    return(
        <div>
            <ul>
                {
                    /*  equipo.map */ (item =>(
                        <li key={item.id}>{item.name} - {item.species} - {item.status} </li>
                    )) 
                }
            </ul>
        </div>
    )

}
export default Nosotros 
