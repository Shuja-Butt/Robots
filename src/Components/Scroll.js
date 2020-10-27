import React from 'react';
import './Scroll.css';
// class Scroll extends React.Component
// {
//    render()
//    {
//      return    this.props.children;
//    }
// }

const Scroll=(props)=>
{   
	return(
		<div className="Chil">
	{props.children}
	 </div>
);
}
export default Scroll; 


