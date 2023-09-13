import React,{useState} from 'react'

export default function Footer() {
  let footerStyle = {
    position: "relative",
    top: "100vh",
    width: "100%"
  }

  return (
    
    <footer className='my-3 bg-dark text-light py-1' style={footerStyle}>
           <p className='text-center'>Copyright &copy; TodoLists.com</p>
            
    </footer>
  )
}
