//Este es el archivo que va a devolver la card con sus datos
import React, {useState, useEffect} from 'react'
import CharacterCard from './InfoCard'; 
import axios from 'axios';


const CharacterList = () =>{
    const [characters, setCharactes ] = useState([]);

    useEffect(() => {
        /* setTimeout(() => {
            console.log('Getting Data');
        }, 2000 ); */
        axios('https://rickandmortyapi.com/api/character').then((json)=>
            setCharactes(json.data)
        );
    }, []);
    //problemas con el .map denuevo
      return( 
     <div className='CharacterList-container'>
        {characters.map((char) =>{ 
            return (
                <div>
                    <CharacterCard />
                </div>
                );
     })}
    </div> 
     ); 
};
export default CharacterList; 