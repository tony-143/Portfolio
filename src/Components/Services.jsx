import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Typewriter from 'react-text-writer'
import cv from '../assets/img/Black White Minimalist CV Resume_20240327_135237_0000.pdf'
const Services = () => {
  // const {text}=useTypewriter({
  //   words:['Developer'],
  //   loop:{},
  //   typeSpeed: 120
  // })
  return (
    <div className='my-5 py-5'>
      <div className="d-flex pt-5 flex-wrap row justify-content-around align-items-center px-md-5">
        <h1 className='d-flex flex-column col-md-6 col-12 position-realtive'>
          <span style={{ fontSize: '40px' }} className='position-relative text-light'>My <span className='text-primary'>Services</span> </span>
          <span style={{ fontSize: '30px' }} className='text-warning d-block raleway mt-2'>
            <Typewriter
              text={
                [
                  "HTML/CSS/JAVASCRIPT",
                  "Web Designs",
                  "Frontend Projects",
                  "Frameworks and Libraries",
                  "Responsive Design"
                ]
              }
              speed={100}
              isLoop
              loopDelay={1000}
              textClassName="text-slate-800"
            /><Cursor cursorStyle=' --'/>
          </span>
          </h1>
        <a href="" className='btn  col-md-6 mt-4 mt-md-0 col-12 w-50 btn-warning p-2 rounded-pill px-4 fs-3' download={cv}>Download CV</a>
      </div>
    </div>
  )
}

export default Services