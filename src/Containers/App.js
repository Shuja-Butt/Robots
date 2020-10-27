import React,{Component} from 'react';
//import {Data} from './ENames';
import CardList from '../Components/CardArray';
import Scroll from '../Components/Scroll';
import SerchBox from '../Components/SerchBox';
import ErrorBoundry from '../Components/ErrorBoundery';
import 'tachyons';
import './App.css';
import {connect} from 'react-redux';
import {ChangeSearch,fetchRobots} from '../Actions.js';
import Thoba from '../Components/Header';
// import {handleSearch,robotsReducer}  from '../Reducers.js';



const mapStateToProps=state=>{
return{
    search:state.handleSearch.search,
    robots:state.robotReducer.robots,
    pending:state.robotReducer.pending
}
}

const mapDispatchToProps=dispatch=>{
 return {
  
  onSerchChange:(event)=>dispatch(ChangeSearch(event.target.value)),
  onRobots:()=>dispatch(fetchRobots())

 }



}

class App extends Component
{

  // constructor()
  // {
  //    super();
  //     this.state=
  //     {   
  //     	  robots:[],
  //        // search:""
  //     }
  // }
   // onSerchChange=(event)=>
    // {
    // 	this.setState({search:event.target.value});
    
    // 	//WHy parenthesis ?????
    // }
    componentDidMount()
    {
       // console.log(this.props.store.getState());


         // fetch('https://jsonplaceholder.typicode.com/users')
         //   .then(response => response.json())
         //     .then(json => console.log(json))
           // fetch('https://jsonplaceholder.typicode.com/users')
           // .then(response=>response.json())
           // .then(users=>this.setState({robots:users}));

             this.props.onRobots();

        

    }
   render()
   {
      const {onSerchChange,search,robots}=this.props;
      
        const filterRobots=robots.filter((content)=>
        {
           return content.name.toLowerCase().includes(search.toLowerCase());
        })
          if(!(robots.length))
          {
           return <h1>LOADING</h1>
          }
          else
          {
      return(
         <div className='tc '>
           <Thoba/>
           <SerchBox    className=" pa6"  /*result={this.onSerchChange}*/ result={onSerchChange}   />
           <Scroll>
           <ErrorBoundry>
           <CardList   Info={filterRobots}  />
           </ErrorBoundry>
           </Scroll>
         </div>
    );
    }
   }
}


export default  connect(mapStateToProps,mapDispatchToProps)(App);

















