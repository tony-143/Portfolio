import React from 'react'
import profile from '../assets/img/WhatsApp Image 2024-02-29 at 00.58.13_4e0cb458.jpg'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Services from './Services'
import About from './About'
const Home = () => {
    return (
        <>
            <div id='home' className='mx-xxl-5 px-xxl-4 px-2'>
                <div className="row gap-5 py-md-5 ">

                    <div className="col-12  col-md-5">
                        <div className="row ps-md-4">

                            <div className="col-10 sideSlide d-flex my-sm-5 py-sm-5 py-5 my-5 flex-column gap-5">
                                <div className=' pt-md-5 mt-sm-5'>
                                   <div className="row">
                                    <div className="col-8">
                                    <h1 style={{ fontSize: "100px" }}><span className='text-warning'>Hy!</span> I Am</h1>
                                    <h1 style={{ fontSize: "100px" }}>Sai Teja</h1>
                                    </div>
                                    <div className="col-4">
                                    <div className=" w-100 end-0 mt-5 pt- d-md-none rightSlide">
                                        <img className='img-fluid rounded-circle img-thumbnail' style={{ height: '100%', width: '100%' }} src={profile} alt="" />
                                    </div>
                                    </div>
                                   </div>
                                </div>
                                <p className='my-md-4 fs-5'>
                                    FrontEnd Developer with high level of experience in web designing and development,
                                    producting with qulity work.
                                </p>



                               <a href="#footer"> <button className='rounded-pill w-50 h5 me-sm-5 py-3 px-3 bg-warning shadow'>Hire Me</button></a>
                                </div>
                            <div className="col-2 topSlide ps-3 d-flex flex-column gap-5 h2 justify-content-center">

                                <a href="https://github.com/tony-143/Portfolio">     <i class="fa-brands link hoverOrange fa-github"></i>  </a>
                                <a href="https://www.linkedin.com/in/sai-teja--/">   <i class="fa-brands link hoverOrange fa-linkedin"></i></a>
                                <a href="https://www.instagram.com/tony143____/">    <i class="fa-brands link fa-instagram hoverOrange"></i></a>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 d-none col-md-5 d-md-flex rightSlide justify-content-center align-items-center">
                        <div className="position-relative w-100 rightSlide ps-md-5 ms-md-5 mt-md-5 pt-md-5">
                            <img className='img-fluid rounded-circle img-thumbnail' style={{ height: '100%', width: '100%' }} src={profile} alt="" />
                        </div>
                    </div>
                </div>
                <div id="services"><Services /></div>
                <div id="portfolio"><Portfolio /></div>
                <div id="about"><About /></div>
                <div id='contact'><Contact /></div>

            </div>
        </>
    )
}

export default Home