import React from 'react';
import './Card.css'
const Card=({id,name, email})=>
{ //const {n, e}=props;

   
    console.log('Card')
  return(

       <div id="fa">
       <div id='ch'>
       <img className="card" src={`https://robohash.org/${id}?200x200`} alt="Robots" />
       <p>{name}</p>
       <p>{email}</p>
       </div>
      </div>
  	);
}

export default Card;





