import Logo from './Logo'
import './styles.css'
import React, { useState } from 'react'
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import gsap from "gsap";
import { usePathname, useRouter } from 'next/navigation'
import { setRef } from '../util/store/refSlice';
import { scroller } from 'react-scroll';
import Link from 'next/link';
import { Provider, useDispatch } from 'react-redux';
import { setScroller } from '../util/store/scrollerSlice';
import { useSelector } from 'react-redux';
import store from '../util/store/store';

export default function Header({ }) {
  const [ismenuIcon, setismenuIcon] = useState(false)
  const [scrollerTo, setscrollerTo] = useState('')
  const pathName = usePathname();
  const router = useRouter();
  // const navigation = useNavigation();


  useEffect(() => {
    AOS.init();

  }, [])

  return (
    <Provider store={store}>
      <Containter />
    </Provider>

  )
}
const Containter = () => {

  const [ismenuIcon, setismenuIcon] = useState(false)
  const [scrollerTo, setscrollerTo] = useState('')
  const pathName = usePathname();
  const router = useRouter();
  const dispatch = useDispatch()
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

  useEffect(() => {
    const scrollerss= localStorage.getItem('scroller')
    console.log("scroller",scrollerss )
    scroller.scrollTo(scrollerss!, {
      duration: 1000,
      delay: 1,
      smooth: 'easeInOutQuart',
    });
    localStorage.clear()
  }, [ router])

  const menuIcon = () => {
    setismenuIcon(!ismenuIcon)
  }

  const handleClick = (scrollTo: string) => {

    if (pathName !== '/') {
      setscrollerTo(scrollTo)
      localStorage.setItem('scroller',scrollTo)
      dispatch(setScroller({scroller:scrollTo}))
      router.push('/')
      

    } else {
      scroller.scrollTo(scrollTo, {
        duration: 1000,
        delay: 1,
        smooth: 'easeInOutQuart',
      });
    }

  };

  function openInNewTab(url: string) {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  }
  return (
    <div data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="1000" className="headerbar">

      <Logo />

      <div className="headerlistMenue">
        <Link href={'../'} className="headerMenue">Home</Link>
        <div onClick={() => handleClick('ScrollToAboutUs')} className="headerMenue">About Us</div>
        <div onClick={() => handleClick('ScrollToServiceContainer')} className="headerMenue">Services</div>

        <Link className="headerMenue" href={'../partners'}>Partners</Link>
        <div className="headerMenue">Events</div>

      </div>
      <div onClick={() => openInNewTab('https://calendly.com/fredmindtaxidilimited/30min?month=2023-06')} className="BookAConsultationBox">
        <span>Book A Consultation</span>
      </div>


      <div onClick={menuIcon} className="menuIcon">
        <FontAwesomeIcon icon={faBars} size={'3x'} color="#313030" />
      </div>
      <div className="headerlistMenueMobile">
        <Link href={'../'} className="headerMenue">Home</Link>
        <div onClick={() => handleClick('ScrollToAboutUs')} className="headerMenue">About Us</div>
        <div onClick={() => handleClick('ScrollToServiceContainer')} className="headerMenue">Services</div>
        <Link className="headerMenue" href={'../partners'}>Partners</Link>
        <div className="headerMenue">Events</div>
        <div onClick={() => openInNewTab('https://calendly.com/fredmindtaxidilimited/30min?month=2023-06')} className="BookAConsultationBoxMobile">
          <span>Book A Consultation</span>
        </div>

      </div>
    </div>
  )
}