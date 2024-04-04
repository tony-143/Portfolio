import React from 'react'
import wave from '../assets/img/wave.png'
const Footer = () => {
  return (
    <div id='footer' className='position-relative mt-5 py-5'>
      <img src={wave} style={{ zIndex: '-1', height: '400px', width: '100%' }} className='bottom-0 img-fluid position-absolute' alt="" />
      <div style={{ zIndex: '999', fontSize: '50px' }} className="text-dark flex-wrap d-flex justify-content-around pt-5 ps-3 ">

        <div>
          <h1 className='mb-4 mt-4 ms-4'>Contact Details</h1>
          <ul className='h4'>
            <li><i class="fa-solid mb-3 me-4 fa-phone"></i>+91 8555047507</li>
            <li><i class="fa-solid mb-3 me-4 fa-envelope"></i>saiteja084084@gmail.com</li>

          </ul>
        </div>
        <div className="d-flex flex-md-column h1 gap-4 justify-content-center align-items-center">
          <a href="https://github.com/tony-143/Portfolio">     <i class="fa-brands text-dark  hoverOrange fa-github"></i>  </a>
          <a href="https://www.linkedin.com/in/sai-teja--/">   <i class="fa-brands text-dark hoverOrange fa-linkedin"></i></a>
          <a href="https://www.instagram.com/tony143____/">    <i class="fa-brands text-dark fa-instagram hoverOrange"></i></a>
        </div>


      </div>
    </div>
  )
}

export default Footer