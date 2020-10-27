import React from 'react';


class  Header extends React.Component
{

shouldComponentUpdate(nextProps, nextState)
{ 
 // if(this.)
   return false;
  
}

 render()
 {
    console.log('Header')
 	return <h1 className="head">ROBOFRIENDS</h1>
 }



}
export default Header;