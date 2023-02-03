// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import {useState} from 'react';


// eslint-disable-next-line
function App() {
  return (
    <div className="App">
  const [number,setNumber]=useState(1);
  return (
    
  <div id="container">
    
    <h1>Root:{number}</h1>
    
    <div id="grid">
    <Left1 number={number}></Left1>
    
    <Right1 onIncrease={()=>{
      // eslint-disable-next-line
      setNumber(number + 1);
    }}></Right1>
    </div>
  </div>);
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1 :{props.number}</h1>
      <Left2 number={props.number}></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left2:{props.number}</h1>
      <Left3 number={props.number}></Left3>
    </div>
  );
}

function Left3(props) {
  return (
    <div>
      <h1>Left3:{props.number}</h1>
    </div>
  );
}
function Right1(){
  return(
    <div>
      <h1>Right1</h1>
      <Right2 onIncrease={()=>{
        // eslint-disable-next-line
        props.onIncrease();
      }}></Right2>
    </div>
  );
}
function Right2(){
  return(
    <div>
      <h1>Right2</h1>
      <Right3 onIncrease={()=>{
        // eslint-disable-next-line
        props.onIncrease();
      }}></Right3>
    </div>
  );
}
function Right3(){
  return(
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onCLick={()=>{
        // eslint-disable-next-line
        props.onIncrease();
      }}/>
    </div>
  );
}




