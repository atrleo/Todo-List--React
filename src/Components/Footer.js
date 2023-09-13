import React,{useState} from 'react'

export default function Footer() {
  const[value,setValue]=useState(1);
  const onclickUp = ()=>{
  setValue(value+1);
  }
  const onclickDown = ()=>{
  setValue(value-1);
  }
  return (
    
    <div className='my-3'>
            {/* This section is a footer section */}
            <button className='btn btn-primary' onClick={onclickDown}>Down</button>{value}
            <button className='btn btn-primary' onClick={onclickUp}>up</button>
            
    </div>
  )
}
