import React from 'react'
import profile from '../assets/img/WhatsApp Image 2024-02-29 at 00.58.13_4e0cb458.jpg'
import Portfolio from './Portfolio'
import Contact from './Contact'
const Home = () => {
    return (
        <>
            <div id='home' className='mx-xxl-5 px-xxl-4 px-2'>
                <div className="row gap-5 py-md-5 ">

                    <div className="col-12  col-md-5">
                        <div className="row ps-md-4">

                            <div className="col-10 sideSlide d-flex my-sm-5 py-sm-5 py-5 my-5 flex-column gap-5">
                                <div className='mt-md-5 pt-md-5 mt-sm-5'>
                                    <h1 style={{ fontSize: "100px" }}><span className='text-warning'>Hy!</span> I Am</h1>
                                    <h1 style={{ fontSize: "100px" }}>Sai Teja</h1>
                                </div>
                                <p className='my-md-4 fs-5'>
                                    FrontEnd Developer with high level of experience in web designing and development,
                                    producting with qulity work.
                                </p>
                                <button className='rounded-pill w-50 h5 me-sm-5 py-3 px-3 bg-warning shadow'>Hire Me</button></div>
                            <div className="col-2 topSlide ps-3 d-flex flex-column gap-5 h2 justify-content-center">
                                <i class="fa-brands hoverOrange fa-github"></i>
                                <i class="fa-brands hoverOrange fa-linkedin"></i>
                                <i class="fa-brands fa-instagram hoverOrange"></i>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-5 d-flex rightSlide justify-content-center align-items-center">
                        <div className="position-relative rightSlide ps-md-5 ms-md-5 h-75 mt-md-5 pt-md-5">
                            <img className='img-fluid rounded-circle img-thumbnail' style={{ height: '100%', width: '100%' }} src={profile} alt="" />
                        </div>
                    </div>
                </div>
                <div id="portfolio"><Portfolio /></div>
                <div id='contact'><Contact /></div>

            </div>
        </>
    )
}

export default Home