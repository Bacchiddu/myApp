import React, {useState, useEffect } from "react";
import axios from 'axios'
import {Card, Image} from 'semantic-ui-react'
const CharacterDetail = ({match}) =>{

    let charID = match.params.id
    const [character, setCharacter ] = useState([]);

    useEffect(() =>{
        axios(`https://breakingbadapi.com/api/characters/${charID}`).then((res) => 
        setCharacter(res.data)
        );
    }, [charID]);

    return (
        <div className='CharacterDetail' style={{padding:40}}>
            <h1> Datos del personaje</h1>
            {character.map((char) =>{
                return(
                    <Card key={char.char_id}>
    <Image src={char.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{char.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{char.birthday}</span>
      </Card.Meta>
      <Card.Description> {char.nickname} {char.occupation}</Card.Description>
    </Card.Content>
    </Card>
                )}
            )}
    
  </div>
);
};

export default CharacterDetail;
