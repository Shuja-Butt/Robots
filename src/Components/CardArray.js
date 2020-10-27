import React from 'react';
import Card from './Card';

let CardList=({Info})=>
{      


     return(

     	<div>
       { 
        Info.map((content,index )=>
           {
             //when iterating over array keys must be defined for each array and must be unique
          return <Card  key={Math.random()}  id={content.id} name={content.name}      email={content.email}  />

            })
           }
            </div>
    );
     
}

export default CardList;









