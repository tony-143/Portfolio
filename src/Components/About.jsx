import React from 'react'
import profile from '../assets/img/WhatsApp Image 2024-02-29 at 00.58.13_4e0cb458.jpg'

const About = () => {
    return (
        <div className='pt-5'>
            <h1 className='text-center pt-5 pb-4 my-5 text-warning'>About</h1>
            <div className="row ">
                <div className="col-md-6  col-12">
                    <div className="img ms-md-5 ps-md-5 d-flex justify-content-center mb-5">
                        <img src={profile} style={{borderRadius:"30px"}} className='img-fluid w-75' alt="" />
                    </div>
                </div>
                <div className="col-md-6 align-items-center d-flex col-12">
                    <p style={{borderRadius:"50px"}} className='fs-4 text-justify borderOrange p-3'>
                        Enthusiastic frontend developer with a passion for creating user-friendly web applications.
                        Experienced in HTML, CSS, JavaScript, and various frontend frameworks including React and
                        Bootstrap. Strong problem-solving skills and a keen eye for design. Committed to staying updated
                        with the latest technologies and continuously improving my coding skills.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default About