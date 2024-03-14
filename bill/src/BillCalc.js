import React from 'react';
import './BillCalc.css'
import { useEffect, useRef, useState } from 'react';

export default function BillCalc(props) {
  // useEffect(()=>{
  //   props.func(props.billname)
  //   console.log("kkkkkkk",props.billname)
  // },[]);


  return (
    <div className='p-4 ms-5 mt-3 maindiv '>
      <div className='ps-4'>
      <h5><b>SPLIT A BILL WITH {props.billname}</b></h5>
      <br></br>
     
      <div className='d-flex'>
        <p className='col-1'><i class="fa fa-money"></i></p>
        <p className='col-7'>Bill Value</p>
        <p className='col-2'><input type='text' className='inp'/></p>
      </div>
      <div className='d-flex'>
        <p className='col-1'><i class="fa fa-user"></i></p>
        <p className='col-7'>Your Expense</p>
        <p className='col-2'><input type='text' className='inp'/></p>
      </div>
      <div className='d-flex'>
        <p className='col-1'><i class="fa fa-users"></i></p>
        <p className='col-7'>{props.billname }</p>
        <p className='col-2'><input type='text' className='inp'/></p>
      </div>
      <div className='d-flex'>
        <p className='col-1'><i class="fa fa-usd"></i></p>
        <p className='col-7'> Who is Paying the bill</p>
        <p className='col-2'>
          <select className='inp text-align-center' >
            <option>You</option>
            <option>{props.billname}</option>
          </select>
        </p>
      </div>

      <button className='btn mybtn me-2' style={{float:"right"}}>Split Bill</button>
      </div>
    </div>
  )
}
