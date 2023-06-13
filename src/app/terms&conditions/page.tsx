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
         <PartnersContainer1 />
        </Element>
        
        
        <Footer delay={'0'}/>

      </div>
    </main>


  )
}


const PartnersContainer1 = () => {
  function openInNewTab(url:string) {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  }
  return (
    <div className="PartnersContainer">
      <div className="PartnersTextContainer">
        <div className="PartnersTextHeader">
        Terms & Conditions
        </div>
        
        <div className="PartnersText">
          Consular Discretion for Visa Approval:
          <br />
          The approval of visas is solely at the discretion of the consular authorities. While we provide expert guidance and support throughout the visa application process, it is important to understand that the final decision lies with the consular office.
          <br /><br />
          Secure Payments to the Company:
          <br />
          All payments should be made directly into the company&apos;s designated account. We prioritize transparency and accountability, and therefore, it is essential that all financial transactions are conducted through verified channels.
          <br /><br />
          Verification of Transactions:
          <br />
          To ensure the integrity of our operations and protect the interests of all parties involved, we require thorough verification of all transactions. This step is essential for maintaining trust and adhering to our commitment to professionalism and ethical practices.
          <br /><br />
          Zero Tolerance for Fraudulent Activity:
          <br />
          Fredmind Taxidi Limited reserves the right to terminate any dealings that are discovered to be false or involve fraudulent activities. We maintain a zero-tolerance policy towards dishonest practices and prioritize the well-being of our clients and partners.
          <br /><br />

          We welcome the opportunity to meet with you for a personalized one-on-one discussion or arrange tailored training sessions for your staff, students, or organization. These sessions can provide valuable insights and knowledge regarding our services. We are dedicated to ensuring that all individuals who may benefit from our offerings have access to the necessary information and support.
          <br /><br />
          Please reach out to us to schedule a meeting or training session. We look forward to further discussing how we can assist you and your organization.
          <div style={{marginTop:'20px'}} onClick={()=>openInNewTab('https://calendly.com/fredmindtaxidilimited/30min?month=2023-06')}className="BookAConsultationBox">
        <span>Book A Consultation</span>
      </div>
        </div>

      </div>



    </div>
  )
}








