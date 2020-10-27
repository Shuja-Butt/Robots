
import {
	SEARCH_FILED_CHANGE,
	FETCH_ROBOTS_PENDING,
	FETCH_ROBOTS_FULLFILLED,
	FETCH_ROBOTS_ERROR
} from './Constants.js';

export const ChangeSearch=(UserInput)=>({
  type:SEARCH_FILED_CHANGE,
  payload:UserInput
})

export const fetchRobots=()=>(dispatch)=>{
	dispatch({type:FETCH_ROBOTS_PENDING})
     fetch('https://jsonplaceholder.typicode.com/users')
           .then(response=>response.json())
           .then(data=>dispatch({type:FETCH_ROBOTS_FULLFILLED,payload:data}))
           .catch(Err=>dispatch({type:FETCH_ROBOTS_ERROR,payload:Err}))

}




















