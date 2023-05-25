import Logo from './Logo'
import './styles.css'
import React from 'react'
import { useEffect } from "react";
import  AOS from 'aos';
import "aos/dist/aos.css";

export default function Header() {
  useEffect(() => {
    AOS.init();
    
  }, [])


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
    </div>
  )
}
