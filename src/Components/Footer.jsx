import React from 'react'
import wave from '../assets/img/wave.png'
const Footer = () => {
  return (
    <div className='position-relative mt-5 py-5'>
      <img src={wave}  style={{ zIndex:'-1',height: '400px', width: '100%' }} className='bottom-0 img-fluid position-absolute' alt="" />
      <div style={{zIndex:'999',fontSize:'50px'}} className="text-dark py-5 ps-3 d-flex gap-5 h1 justify-content-center align-items-center">
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
  )
}

export default Footer