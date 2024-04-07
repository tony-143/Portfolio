import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
    let name =useRef()
    let email =useRef()
    let comment=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        if(!name.current.value.trim()){
            alert("enter name")
        }
        else if(!email.current.value.trim()){
            alert("enter email")
        }
        else{
        emailjs
          .sendForm('service_utvxt7d', 'template_oivu6ai', form.current, {
            publicKey: 'mghG9u4uyDgrB_lsO',
          })
          .then(
            () => {
                alert("submited successfully Thank You!")
                name.current.value=""
                email.current.value=""
                comment.current.value=""
            },
            () => {
                alert("failed to submit")
            },
          );
        }
      };
    const form = useRef();


  return (
    <div className='my-5 rightSlide py-5'>
        <div className="row py-5 my-5">
            <div className="col-md-5 text-center ">
                <h1 className=''>Get In touch</h1>
                <h1 className='text-warning'>Contact Me</h1>
            </div>
            <div className="col-md-7">
                <form onSubmit={sendEmail} ref={form} className="d-flex flex-column w-100 gap-5">
                    <input ref={name} name="user_name"  type="text" className='borderOrange rounded-pill px-3 py-3 ' placeholder='name' />
                    <input ref={email} type="email"  name="user_email"  className='borderOrange rounded-pill px-3 py-3' placeholder='email' />
                    <textarea ref={comment} name="message"  placeholder='message' style={{borderRadius:'20px'}} className='px-3 borderOrange' id="" cols="30" rows="5"></textarea>
                    <input type='submit' value="send" className='bg-warning fs-4 w-25 rounded-pill mx-auto p-2'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact