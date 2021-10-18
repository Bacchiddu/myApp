import React from 'react';
import './ItemList.css'
// import { Card, Image } from 'semantic-ui-react';


    
//     const Item = ({ data }) => (
//         <Card>
//             <Image src={data.img} style={{ maxHeight: 400, minHeight: 400 , width: 300} } />
//             <Card.Content>
//                 <Card.Header>{data.name}</Card.Header>
//                 <Card.Meta>
//                     <span className='date'>{data.birthday}</span>
//                 </Card.Meta>
//                 <Card.Description>Status: {data.status}</Card.Description>
//             </Card.Content>
//         </Card>
//     );

    
    

// export default Item

const Item = ({ characters }) => {
    return (
      <div className="container">
        <div className="row">
          {characters.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card" style={{ minWidth: "200px" }}>
                <img className="card-img-top" src={item.image} alt="character" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <hr />
                  <p className="card-text">Species: {item.species}</p>
                  <p className="card-text">Location: {item.location.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  



export default Item;