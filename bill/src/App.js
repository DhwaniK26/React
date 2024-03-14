import React, { useEffect, useRef, useState } from 'react';
import NameCards from './NameCards';
import BillCalc from './BillCalc';
import './App.css'

export default function App() {

  var mynames = [
    {name:"Clark"},
    {name:"Sarah"}
  ]

  // const [btnstate1, btnfunc1] = useState(false);  //close-select & display
  // const [btnstate2, btnfunc2] = useState(false);

  const [button1Text, setButton1Text] = useState('Select');
  const [button2Text, setButton2Text] = useState('Select');
  
  const [isFiltered, setIsFiltered] = useState(false)

  const [namedata, namefunc] = useState(mynames);   //selects name and sets it
  
  var handlename = (newname,buttonNumber) => {
    // btnfunc1(!btnstate1); //true
    // btnfunc2(!btnstate2); //false
   
    if (buttonNumber === 1) {
      
      setButton1Text((Text) => (Text === 'Select' ? 'Close' : 'Select'));
    } else if (buttonNumber === 2) {
      
      setButton2Text((Text) => (Text === 'Select' ? 'Close' : 'Select'));
    }

    if(isFiltered){
      namefunc(mynames)
    }else{
      namefunc(namedata.filter((e) => e.name == newname));
    }
    setIsFiltered(!isFiltered);

    console.log(namedata);  
    //namefunc(namedata.filter((e) => e.name == newname));
  };

  

  return (
    <div className='d-flex p-5 sidebar'>
      <ul style={{ listStyle: "none" }} >
    
      <li className=""><NameCards image="https://etckid.com/wp-content/uploads/2018/04/face-circle-300x300.png" 
      //btnvalue={btnstate1 == true ? "close" : "select"} title="You owe Clark 7$ "
      btnvalue={button1Text}  title="You owe Clark 7$ "
      func={handlename} number={1} name={mynames[0].name}
      
      /></li>
  
  {/* one solution is to make inidividual useState and function for every button */}
      <li  className="dynamic-li">
      <NameCards image="https://etckid.com/wp-content/uploads/2018/04/face-circle-300x300.png" 
      //btnvalue= {btnstate2 == false ? "select" : "close"} title= "Sarah owes you 20$"
      btnvalue={button2Text}  title="You owe Clark 7$ "
      func={handlename} number={2}
      name="Sarah"
       /></li> 
      </ul>

      <span>{button1Text === 'Close' || button2Text === 'Close' ? namedata.map((e) => <BillCalc key={e.name} billname={e.name} />) : ""}</span>
      {/* <span>{button1Text === 'Close' || button2Text === 'Close' ? <BillCalc billname={namedata.map((e)=>e.name)} />: ""}</span> */}
    </div>
  )
}
