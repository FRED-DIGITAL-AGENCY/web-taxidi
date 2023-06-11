'use client'
import Header from "../components/Header"


import './styles.css'
import Image from "next/image";
import { JumpingGirl } from "../assets/images/indexExport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faCheckCircle, faHourglass, faStarOfDavid } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Logo from "../components/Logo";
import { useEffect, useRef } from "react";
import AOS from 'aos';
import { Provider } from 'react-redux'
import store from "../util/store/store";
import { Element, scroller } from 'react-scroll';
import Typewriter from "typewriter-effect";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { Body2 } from "../components/LandingPage/Body2";
import { Body3 } from "../components/LandingPage/Body3";
import Partners from "../components/partners";
import { Footer } from "../components/Footer";


export default function Home() {

  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out-back'
    });

    scroller.scrollTo('ScrollToPartners', {
      duration: 1000,
      delay: 1,
      smooth: 'easeInOutQuart',
    });

  }, [])


  return (


    <main className="flex min-h-screen  min-w-screen  flex-col">
      <LandingPage />
      {/* <Body2 /> */}
      <div className="Body3BG Body3 pt-7">
        <Element name="ScrollToPartners">
          <Partners />
        </Element>
        <PartnersContainer1 />
        <Footer />

      </div>
    </main>


  )
}

const PartnersContainer1 = () => {

  return (
    <div className="PartnersContainer">
      <div className="PartnersTextContainer">
        <div className="PartnersTextHeader">
          Why do we need partners ?
        </div>
        <div className="PartnersText">
          At Fredmind Taxidi Limited, we recognize the power of collaboration and the importance of building strong partnerships. With a global team of seasoned professionals, we have successfully guided countless travelers from around the world to secure admissions in renowned universities across the United States, United Kingdom, Australia, and Canada for both undergraduate and postgraduate studies. Additionally, we offer tailor-made tour and vacation packages that cater to your specific needs, ensuring your trip is comfortable and productive.
          <br /> <br />
          As we continue to serve a diverse clientele, we understand the significance of forging partnerships to expand our reach and deliver exceptional services to an even wider audience. By joining forces with like-minded organizations, we can create a synergy that enables us to offer an even more comprehensive range of travel solutions and cater to the unique requirements of individuals and groups alike.
          <br /> <br />
          To initiate a partnership with us, simply download the partnership agreement form available on our website. Once completed, kindly send the filled-out form to us at <b>partnership@fredmindtaxidi.com</b> . We eagerly look forward to exploring the possibilities of collaboration and jointly shaping the future of the travel industry.
          Together, let&apos;s embark on a remarkable journey of growth, mutual success, and unparalleled service.

        </div>
      </div>
      <div className="PartnersImageContainer">

      </div>

    </div>
  )
}








