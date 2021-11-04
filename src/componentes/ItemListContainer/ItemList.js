import React, {useState, useEffect} from 'react'
import CharacterCard from '../Views/InfoCard'; 
import axios from 'axios';
import { Link } from 'react-router-dom';



const CharacterList = () =>{
    const [characters, setCharactes ] = useState([]);
    

    useEffect(() => {
        setTimeout(() => {
            console.log('Getting Data');
        }, 2000 ); 
        axios('https://breakingbadapi.com/api/characters').then((json)=>
            setCharactes(json.data)
        );
    }, []);
    //problemas con el .map denuevo
      return( 
     <div className='CharacterList-container'>
        {characters.map((char) =>{ 
            return (
                <div key={char.char_id}>
                  <Link to={`/cards/${char.char_id}`}> 
                    <CharacterCard data={char}/>
                    </Link>
                </div>
                );
     })}
    </div> 
     ); 
};
export default CharacterList; 