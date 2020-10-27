import React from 'react';
import  './SearchBox.css';
const SerchBox=({result})=>
{   
	return(

            <div >
            <input  className="search"    type="text" name="serchbox"  onChange={result} placeholder="SERCH ROBOTS"/>
            </div>


      );


}
export default SerchBox;





