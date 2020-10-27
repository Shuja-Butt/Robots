
import {
	SEARCH_FILED_CHANGE,
	FETCH_ROBOTS_PENDING,
	FETCH_ROBOTS_FULLFILLED,
	FETCH_ROBOTS_ERROR
} from './Constants.js';


const initialStateSearch={
	 search:''
}


export  const handleSearch=(state=initialStateSearch,action={})=>{

     switch (action.type) {
     	case SEARCH_FILED_CHANGE:
     		return {...state,search:action.payload}//alternative Object.assign({},state,{search:action.payload})
     	default:
     	return state;
     	    
     }

}



const initialStateRobots={

 robots:[],
 pending:true

}

export const robotReducer=(state=initialStateRobots,action={})=>{

          
    switch (action.type) {
    	case FETCH_ROBOTS_PENDING:
    	return state;
    	case FETCH_ROBOTS_FULLFILLED:
    	return {...state,robots:action.payload,pending:false}
        case FETCH_ROBOTS_ERROR:
        return {...state,pending:false}
    	default:
    	return state;
    		
    }





}









