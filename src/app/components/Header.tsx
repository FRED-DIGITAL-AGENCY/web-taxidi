import Logo from './Logo'
import './styles.css'
import React, { useState } from 'react'
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import gsap from "gsap";

import { setRef } from '../util/store/refSlice';
import { scroller } from 'react-scroll';
import Link from 'next/link';

export default function Header({ }) {


  const [ismenuIcon, setismenuIcon] = useState(false)
  useEffect(() => {
    AOS.init();

  }, [])

  useEffect(() => {
    gsap.to(".headerlistMenueMobile", {
      opacity: ismenuIcon ? "1" : "0",
      duration: '1'
    })

    gsap.to(".headerlistMenueMobile", {
      display: ismenuIcon ? "flex" : "none",
      duration: '1'
    })

  }, [ismenuIcon])
  const menuIcon = () => {
    setismenuIcon(!ismenuIcon)
  }

  const handleClick = (scrollTo: string) => {
    scroller.scrollTo(scrollTo, {
      duration: 1000,
      delay: 1,
      smooth: 'easeInOutQuart',
    });
  };
function openInNewTab(url:string) {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) {
    newWindow.opener = null;
  }
}

  return (
    <div data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="1000" className="headerbar">

      <Logo />

      <div className="headerlistMenue">
        <div className="headerMenue">Home</div>
        <div onClick={() => handleClick('ScrollToAboutUs')} className="headerMenue">About Us</div>
        <div onClick={() => handleClick('ScrollToServiceContainer')} className="headerMenue">Services</div>

        <Link className="headerMenue" href={'../partners'}>Partners</Link>
        <div className="headerMenue">Events</div>

      </div>
      <div onClick={()=>openInNewTab('https://calendly.com/fredmindtaxidilimited/30min?month=2023-06')}className="BookAConsultationBox">
        <span>Book A Consultation</span>
      </div>


      <div onClick={menuIcon} className="menuIcon">
        <FontAwesomeIcon icon={faBars} size={'3x'} color="#313030" />
      </div>
      <div className="headerlistMenueMobile">
        <div className="headerMenue">Home</div>
        <div onClick={() => handleClick('ScrollToAboutUs')} className="headerMenue">About Us</div>
        <div onClick={() => handleClick('ScrollToServiceContainer')} className="headerMenue">Services</div>
        <Link className="headerMenue" href={'../partners'}>Partners</Link>
        <div className="headerMenue">Events</div>
        <div onClick={()=>openInNewTab('https://calendly.com/fredmindtaxidilimited/30min?month=2023-06')} className="BookAConsultationBoxMobile">
          <span>Book A Consultation</span>
        </div>
      </div>
    </div>
  )
}
