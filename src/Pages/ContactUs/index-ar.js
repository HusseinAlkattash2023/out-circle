import React from 'react';
import './index.css';
import logo from '../../Assets/images/Group 360.svg'
import back from '../../Assets/images/back.png'
import contact from '../../Assets/images/contact.png'
import {Link} from 'react-router-dom'
import facebook from "../../Assets/images/facebook.png";
import telegram from '../../Assets/images/telegram.png';
import whatsapp from '../../Assets/images/whatsapp.png';
import linkedin from '../../Assets/images/linkedin.png';
import instegram from '../../Assets/images/instagram.png'
import appStore from '../../Assets/images/appStore.png';
import googlePlay from '../../Assets/images/googlePlay.png';
import Bussines from '../../Assets/images/bussiness.png';
import Email from '../../Assets/images/Group 411.png'

function ContactUs() {
    return (
        <div className='contact'>
                <div className="logo_ar">
                <Link className='my-3' to="/ar">
                    <img src={logo} alt=""/>
                </Link>
                </div>
                <div className='back_ar'>
                    <Link to="/ar" className='m-2'>
                        <span>رجوع</span>
                        <img src={back} alt=""/>
                    </Link>
                </div>
            <img className="background" src={contact} alt=""/>
            <div className="rectangle_ar"></div>
            <section className='main main-ar'>
                <div>
                    <h2 style={{fontFamily:"changa"}}>اتصل بنا</h2>
                </div>
                <div className='text_ar'>
                <div className='text-center mb-3'>
            <h3>خدمة الزبائن</h3>
            <p>موبايل 1 : 0946202311</p>
            <p>موبايل 2 : 0986202311</p>
          </div>
          <div className='media'>
            <div>
              <a href="" className='mx-1'><img src={Bussines} alt="" width="40px"/></a>
              <a href="" className='mx-1'><img src={telegram} alt="" width="40px"/></a>
              <a href="" className='ms-1'><img src={Email} alt="" width="40px"/></a>
            </div>
            <div className=''>
              <a href="" className='me-1'><img src={facebook} alt="" width="40px"/></a>
              <a href="" className='mx-1'><img src={instegram} alt="" width="40px"/></a>
              <a href="" className='mx-1'><img src={linkedin} alt="" width="40px"/></a>
            </div>
          </div>
          <p className='text-center mt-3'>--------------------------------</p>
          <div className='text-center'>
            <h3>الإدارة</h3>
            <p>المدير العام : جرير سيد أحمد</p>
            <p>موبايل : 0946332211</p>
          </div>
          <div className='text-center'>
              <a href="" className='me-1'><img src={whatsapp} alt="" width="40px"/></a>
              <a href="" className='mx-1'><img src={telegram} alt="" width="40px"/></a>
              <a href="" className='ms-1'><img src={Email} alt="" width="40px"/></a>
          </div>
          <p className='text-center mt-2'>---------------------------------</p>
          <div className='text-center apps'>
            <p>Apps</p>
            <div className='text-center'>
              <a className='me-3'><img src={googlePlay} alt="" width="100px"/></a>
              <a className='ms-3'><img src={appStore} alt="" width="100px"/></a>
            </div>
          </div>
                </div>
            </section>
        <footer className="footer">
        <div className='icons_ar'>
        <ul>
            <li className="mx-0">
              <a href="https://wa.me/+963946202311" target="_blank">
                <img src={whatsapp} alt="" />
              </a>
            </li>
            <li className="mx-0">
              <a href="https://m.facebook.com/profile.php?id=100088302496274&mibextid=ZbWKwL" target="_blank">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li className="mx-0">
              <a href="" target="_blank">
                <img src={linkedin} alt="" />
              </a>
            </li>
            <li className="mx-0">
              <a href="http://t.me/OutCircle" target="_blank">
                <img src={telegram} alt="" />
              </a>
            </li>
            <li className="mx-0">
              <a href="" target="_blank">
                <img src={instegram} alt="" />
              </a>
            </li>
          </ul>
        <div className='ddd ms-2'>
            <Link to="" className='me-1'>
                <img src={googlePlay} alt="" />
            </Link>
            <Link to="" className='ms-1'>
                <img src={appStore} alt="" />
            </Link>
        </div>
        </div>
            </footer>
        </div>
)
}

export default ContactUs