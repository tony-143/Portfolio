import React from 'react'
import { useState } from 'react'

const Header = () => {
    let [on, setOff] = useState(true)
    let darkMode = () => { setOff(!on) }
    let [menu, setMenu] = useState(false)
    let Menuon = () => { setMenu(!menu) }
    return (
        <div style={{ zIndex: '999' }} className="bg-dark position-fixed w-100 pe-md-5 ">
            <div className='mx-xxl-5 bg-dark w-100 px-xxl-5 px-4 py-3 d-flex justify-content-between'>
                <div className='d-flex align-items-center gap-5'>
                    <h1>Tony</h1>
                    {/* <div style={{ cursor: 'pointer', scale: '0.4' }}
                        onClick={darkMode}  
                        className=' position-relative border rounded-pill darkMode'>
                        <div className={`${on ? "end-0" : "start-0"} position-absolute insideDarkMode rounded-circle mt-1 bg-warning`}></div>
                    </div> */}
                </div>
                <div className="list ms-auto d-none gap-5 d-md-flex align-items-center justify-content-between">
                    <ul className='list-inline mt-3'>
                        <a className='text-light' href="#home"><li className="list-inline-item px-lg-5 hoverOrange px-md-3">Home     </li></a>
                        <a className='text-light' href="#services"><li className="list-inline-item px-lg-5 hoverOrange px-md-3">Services </li></a>
                        <a className='text-light' href="#portfolio"><li className="list-inline-item px-lg-5 hoverOrange px-md-3">Portfolio</li></a>
                        <a className='text-light' href="#about"><li className="list-inline-item px-lg-5 hoverOrange px-md-3">About    </li></a>
                    </ul>
                    <a href='#contact'><button className='btn btn-warning ms-5 ps-3 rounded-pill shadow'>
                        Contact
                    </button></a>
                </div>
                <div className='position-relative'>
                    <button onClick={Menuon} className='btn mt-2 d-md-none shadow text-light' data-toggle="drop-down">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <div className={`${menu ? "d-inline" : "d-none"} bg-white border top-0 end-100 position-absolute rounded`}>
                        <div onClick={Menuon} className='position-absolute end-0 m-2'>❌</div>
                        <ul className='list-group '>
                            <a href="#home"><li className="list-group-item my-1">Home     </li></a>
                            <a href="#services"><li className="list-group-item my-1">Services </li></a>
                            <a href="#portfolio"><li className="list-group-item my-1">Portfolio</li></a>
                            <a href="#about"><li className="list-group-item my-1">About    </li></a>
                        </ul>

                        <button className='btn btn-warning m-3 rounded-pill shadow'>
                            <a href="#contact" className='text-dark'>  Contact</a>
                        </button>
                    </div>
                </div>
            </div></div>
    )
}

export default Header