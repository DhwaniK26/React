import React, { useEffect } from 'react'
import './NameCards.css'

export default function NameCards(props,name) {
 
  return (
    <div className='p-2'>

      <div className=' d-flex p-2 ' id="mydiv" style={{width:350,height:80,borderRadius:5}}>
         <div className='col-3'  onMouseOver={props.change} >
              <img src={props.image} style={{height:60, width:60}}/>
         </div>
         <div className='col-6'>
            <b style={{lineHeight:2}} >{props.name}</b><br></br>
            <p style={{fontSize:15, }}>{props.title}</p>
         </div>
         <div className='p-2'>
            <input type="button" value={props.btnvalue} onClick={() => props.func(props.name, props.number)} className='mymainbtn'></input>
         </div>
      </div>

    </div>
  )
}
