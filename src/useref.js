import React, { useRef, useState } from 'react';
import './Useref.css';

const ArrayPrec = (props) => {

  function Car(props){
    let a = props.trigger;
    if(a){
      return(<h1>You are able to work there</h1>);
    }
    else{
      return(
        <h1>you are not able to work</h1>
      )
    }
    
  }
  
  

// const [value, setValue] = useState("");
// (a)=>{setValue(a.target.value)}
// const [value1, setValue1] = useState("");
const [value, setValue] = useState(false);
const refer = useRef("");


  const arr = [1,3,4,5,6,7];
  const arr2= [...arr, 8,9,0];
  const [one,two , ...rest] = arr2;

  // console.log(value1);
  return (
    <>
    <h1>work condition</h1>
    <Car trigger={value} />
    <div className='login'>
    <input type="text" ref={refer} ></input>
    <button onClick={()=>{setValue(true)}} >click</button>
    </div>
    {/* <h2>your enter name is {value1}</h2> */}
    <h2>your enter name is {props.name}</h2>
    <h1>{one}</h1>
    <h1>{two}</h1>
    <h1>{rest}</h1></>
    
    // <h1> {arr3.map((a)=><p>{a}</p>)}</h1>
  
  )
}

export default ArrayPrec;