// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import {useState} from 'react';
import {createStore} from 'redux';
// eslint-disable-next-line
import { Provider,useSelector,useDispatch,connect} from 'react-redux';
function reducer(currentState,action){
  if(currentState===undefined){
    return {
      number:1,
    }
  }
  const newState = {...currentState}
  if(action.type ==='PLUS'){
    newState.number++;
  }
  return newState;
}
const store=createStore(reducer);


// eslint-disable-next-line
export default function App() {
  return (
    <div className="App">
  return (
    
  <div id="container">
    
    <h1>Root</h1>
    
    <div id="grid">
      <Provider store={store}>   
         <Left1></Left1>
        <Right1></Right1>
    </Provider>
    </div>
  </div>);
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2 number></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1><Left2></Left2> </h1> 
     </div>
  );
}
// eslint-disable-next-line
function Left3(props) {
  // function f(state){
  //   return state.number;
  // }
  const number=useSelector((state=>state.number));
  return (
    <div>
      <h1>Left3:{number}</h1>
    </div>
  );
}
function Right1(){
  return(
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2(){
  return(
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3(){
  const dispatch=useDispatch();
  return(
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={()=>{
        dispatch({type:'PLUS'});
      }}/>
    </div>
  );
}




