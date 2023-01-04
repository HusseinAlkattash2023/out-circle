import React from 'react';
import './index.css';
import logo from '../../Assets/images/Group 360.svg'
import back from '../../Assets/images/back.png'
import contact from '../../Assets/images/contact.png'
import { Link } from 'react-router-dom'
import facebook from "../../Assets/images/facebook.png";
import telegram from '../../Assets/images/telegram.png';
import whatsapp from '../../Assets/images/whatsapp.png';
import Linkedin from '../../Assets/images/linkedin.png';
import instegram from '../../Assets/images/instagram.png';
import appStore from '../../Assets/images/appStore.png';
import Bussines from '../../Assets/images/bussiness.png';
import Email from '../../Assets/images/Group 411.png'
import googlePlay from '../../Assets/images/googlePlay.png';

function ContactUs() {
  return (
    <div className='contact'>
      <div className='logo my-3'>
        <img src={logo} alt="" />
      </div>
      <div className='back'>
        <Link to="/" className='m-2'>
          <span>Back</span>
          <img src={back} alt="" />
        </Link>
      </div>
      <img className="background" src={contact} alt="" />
      <div className="rectangle"></div>
      <section className='main'>
        <div>
          <h2>Countact us</h2>
        </div>
        <div className='text'>
          <div className='text-center mb-3'>
            <p>Customer Service</p>
            <p>Mobile 1 : 0946202311</p>
            <p>Mobile 2 : 0986202311</p>
          </div>
          <div className='media'>
            <div>
              <a href="https://wa.me/+963946202311" className='mx-1' target="_blank" rel="noreferrer"><img src={Bussines} alt="" width="40px"/></a>
              <a href="https://t.me/+963946202311" className='mx-1' target="_blank" rel="noreferrer"><img src={telegram} alt="" width="40px"/></a>
              <a href="mailto:Cs.outcircle@gmail.com" className='ms-1' target="_blank" rel="noreferrer"><img src={Email} alt="" width="40px"/></a>
            </div>
            <div className=''>
              <a href="https://m.facebook.com/profile.php?id=100088302496274&mibextid=ZbWKwL" target="_blank" className='me-1' rel="noreferrer"><img src={facebook} alt="" width="40px"/></a>
              <a href="https://www.instagram.com/out.circle.2023/?fbclid=IwAR1Y7wuS-QtVNNG7hhzwsbzzNfPNUbVGrqTAfCVYPwKMZUGKfKdKJSPU9K8" className='mx-1' target="_blank" rel="noreferrer"><img src={instegram} alt="" width="40px"/></a>
              <a href="https://www.linkedin.com/in/out-circle-463675259" className='mx-1' target="_blank" rel="noreferrer"><img src={Linkedin} alt="" width="40px"/></a>
            </div>
          </div>
          <p className='text-center mt-3'>--------------------------------</p>
          <div className='text-center'>
            <p>Management</p>
            <p>GM. : Jareer Sayed Ahmad</p>
            <p>Mobile: 0946332211</p>
          </div>
          <div className='text-center'>
              <a href="https://wa.me/+963946332211" target="_blank" className='me-1' rel="noreferrer"><img src={whatsapp} alt="" width="40px"/></a>
              <a href="https://t.me/+963946332211" target="_blank" className='mx-1' rel="noreferrer"><img src={telegram} alt="" width="40px"/></a>
              <a href="mailto:Management.outcircle@gmail.com" className='ms-1' target="_blank" rel="noreferrer"><img src={Email} alt="" width="40px"/></a>
          </div>
          {/* <p className='text-center mt-2'>---------------------------------</p>
          <div className='text-center apps'>
            <p>Apps</p>
            <div className='text-center'>
              <a className='me-3'><img src={googlePlay} alt="" width="100px"/></a>
              <a className='ms-3'><img src={appStore} alt="" width="100px"/></a>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default ContactUs
