import React, { useState } from 'react'
import ecommerce from '../assets/img/ecommerce.png'
const Portfolio = () => {
    let Projects = [
        {
            title: "My E-commerce Project",
            link: "https://tonymart.netlify.app/",
            discription: `Developed a modern e-commerce website utilizing ReactJS, delivering a seamless and
            intuitive shopping experience for users. Leveraged React's component-based architecture
            to build reusable UI elements, resulting in streamlined development and maintenance
            workflows.Employed responsive design principles and CSS frameworks such as Bootstrap
            to optimize the site for various devices, improving accessibility and user engagement.
            Demonstrated proficiency in JavaScript ES6+ features, including asynchronous
            programming and functional programming paradigms, to create dynamic and interactive
            user interfaces.`,
            img: ecommerce
        },
        {
            title: "Creating Morden ChatBot",
            link: "https://tonychatbot.netlify.app/",
            discription: `Designed and developed a cutting-edge ModernChatBot application using ReactJS,
            offering a responsive and interactive user experience across various devices.Employed
            modern CSS techniques and media queries to ensure optimal layout and styling on
            desktop, tablet, and mobile devices, delivering a consistent and visually appealing user
            interface. Demonstrated proficiency in frontend development best practices, including
            code optimization, performance tuning, and accessibility standards compliance, to deliver
            a high-quality and polished chatbot solution.`,
            img: ecommerce
        },
        {
            title: "Creating Gym Site",
            link: "https://gymbuildyourbody.netlify.app/",
            discription: `I'm created beautiful animation Morden gym website with using Html,CSS3,JavaScript.
            Mainly I am using react framework. Using frameworks are react and Bootstrap. But This
            site is not responsive. I applied animations. `,
            img: ecommerce
        }
    ]
    let [num, setNum] = useState(0)
    return (
        <div className='my-5 position-relative py-5'>
            <h1 className='text-warning sideSlide mb-3 text-center'>Portfolio</h1>
            <h1 className='text-center mb-md-3 rightSlide'>My Projects</h1>
            <div className="buttons end-0 d-flex h2 gap-3 arrows position-absolute top-25">
                <span
                onClick={()=>{if(num>0)setNum(--num)}}
                className="rounded-circle hover p-2">👈</span>
                <span
                onClick={()=>{if(num<Projects.length-1)setNum(++num)}}
                className="rounded-circle hover p-2">👉</span>
            </div>
            {
                Projects.map((_, i) => {
                    let classs 
                    i === num ? classs="d-flex":classs="d-none"
                    return <Card key={i}
                        visible={classs}
                        discription={_.discription}
                        img={_.img}
                        title={_.title}
                        link={_.link} />
                })
            }
            <div className='d-flex justify-content-center gap-2 '>
                {
                    Projects.map((_, i) => {
                        return <div key={i}
                        onClick={()=>setNum(i)}
                        className={`h1 ${num===i?"text-warning":""} hoverOrange text-center`}>
                            .
                        </div>
                    })
                }</div>

        </div>
    )
}
export function Card({ discription,visible, img, link, title }) {
    return (<>
        <div className={`row mt-md-5 downSlide ${visible} justify-content-center align-items-center gap-5 pb-md-4 pt-5 `}>
            <dic className="col-5 mx-auto hover mt-3 col-md-5 col-12">
                <img className='img-fluid img-thumbnail shadow'
                    src={img} alt="" />
            </dic>
            <div className="col-6 py-4 ps-md-5 col-xxl-6 col-12">
                <h4 className='h2 text-warning'>{title}</h4>
                <p className='fs-4'>{discription}
                    <a href={link} className='hover ps-2 text-warning'>Learn more<i class="ps-1 fa-solid fa-arrow-up-right-from-square"></i></a>
                </p>
            </div>
        </div>
    </>)
}
export default Portfolio