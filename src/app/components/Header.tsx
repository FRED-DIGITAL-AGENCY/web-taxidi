import Logo from './Logo'
import './styles.css'
import React, { useState } from 'react'
import { useEffect } from "react";
import  AOS from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import gsap from "gsap";

export default function Header() {

  const [ismenuIcon, setismenuIcon] = useState(false)
  useEffect(() => {
    AOS.init();
    
  }, [])

  useEffect(() => {
    gsap.to(".headerlistMenueMobile",{
      opacity:ismenuIcon?"1":"0",
      duration:'1'
    })

    gsap.to(".headerlistMenueMobile",{
      display:ismenuIcon?"flex":"none",
      duration:'1'
    })
    
  }, [ismenuIcon])
const menuIcon=()=>{
  setismenuIcon(!ismenuIcon)
  
}

  return (
    <div  data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="1000" className="headerbar">

      <Logo/>
      
      <div className="headerlistMenue">
        <div className="headerMenue">Home</div>
        <div className="headerMenue">About Us</div>
        <div className="headerMenue">Services</div>
        <div className="headerMenue">Our Impact</div>
        <div className="headerMenue">Our Partners</div>
        <div className="headerMenue">Events</div>
        
      </div>
      <div className="BookAConsultationBox">
        <span>Book A Consultation</span>
      </div>

     
      <div onClick={menuIcon} className="menuIcon">
      <FontAwesomeIcon icon={faBars} size={'3x'} color="#313030" />
  </div>
  <div className="headerlistMenueMobile">
        <div className="headerMenue">Home</div>
        <div className="headerMenue">About Us</div>
        <div className="headerMenue">Services</div>
        <div className="headerMenue">Our Impact</div>
        <div className="headerMenue">Our Partners</div>
        <div className="headerMenue">Events</div>
         <div className="BookAConsultationBoxMobile">
        <span>Book A Consultation</span>
      </div>
      </div>
    </div>
  )
}
