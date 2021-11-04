import React from "react";
import {Card,  Image} from 'semantic-ui-react'


const CharacterCard = ({data}) => (
  <Card>
    <Image src={data.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{data.birthday}</span>
      </Card.Meta>
      <Card.Description>
        Status: {data.status}
      </Card.Description>
    </Card.Content>
   
  </Card>
)

export default CharacterCard;