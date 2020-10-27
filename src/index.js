import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
//import    Card from   './Card';
import App from './Containers/App';
import {handleSearch,robotReducer} from './Reducers.js';
//import    {Data} from './ENames.js';
//import  MyArray from './CardArray';//use first letter capital

const rootReducer=combineReducers({handleSearch,robotReducer});
//rootReducer:combine different reducers  into a root reducer
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware,createLogger()));

// ReactDOM.render(<React.StrictMode> <App /></React.StrictMode>, document.getElementById('root'));
ReactDOM.render(<React.StrictMode>  
	            <Provider store={store} >
              <App  />   
              </Provider>
           
	                   { // <Card   name={Data[0].name}   email={Data[0].email}  />
                     //    <Card  name={Data[1].name}   email={Data[1].email}  />
                     //    <Card  name={Data[2].name}   email={Data[2].email}  />
                     //    <Card  name={Data[3].name}   email={Data[3].email}   />
                 }
	</React.StrictMode>,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
