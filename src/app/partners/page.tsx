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
        <PartnersContainer2 />
        <PartnersContainer3 />
        <Footer delay={'0'}/>

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
        <div onClick={() => { }} className="DownloadForm">
          <span>Download Form</span>
        </div>
      </div>
      <div className="PartnersImageContainer">

      </div>


    </div>
  )
}
const PartnersContainer2 = () => {

  return (
    <div className="PartnersContainer">
      <div className="PartnersImageContainer">

      </div>
      <div className="PartnersTextContainer">
        <div className="PartnersTextHeader">
          How can you partner with us?
        </div>
        <div className="PartnersText">
          At Fredmind Taxidi Limited, we welcome partnerships with agents and intermediaries who share our commitment to providing exceptional services to students seeking educational opportunities abroad. We offer two types of partnerships to cater to various preferences and requirements:
          <br />
          <br />
          <b>
            Direct Partnership:
          </b>
          <br />
          <br />
          Under this partnership model, agents refer clients  to us, ensuring they are aware of our services and the application process. Once the referral is made, we take over and maintain direct correspondence with the student throughout the entire process. This streamlined approach allows for efficient communication and ensures a seamless experience for the student.
          <b>
            <br />
            <br />
            Intermediary Partnership:
          </b>
          <br />
          <br />
          In an intermediary partnership, the partner acts as a liaison between Fredmind Taxidi Limited and the Client. Correspondence and information exchange are primarily conducted with the partner, who assumes the responsibility of obtaining all necessary documents and information from the student. This type of partnership is suitable when the partner prefers to maintain confidentiality or when the student is unaware of third-party assistance in the application process.
          It&apos;s important to note that regardless of the partnership model chosen, commissions are equally provided to our partners when the student successfully lands in the destination country. We value the contributions of our partners and recognize their role in supporting students&apos; educational journeys.
          <br />
          <br />
          If you are interested in partnering with us, please reach out to us through the provided contact information or visit our website to download the partnership agreement form. We look forward to collaborating with you and creating meaningful opportunities for students around the world.
          <br />
          <br />
          Together, let&apos;s make a difference in shaping the futures of aspiring students and fostering educational excellence globally.


        </div>
      </div>


    </div>
  )
}
const PartnersContainer3 = () => {

  return (
    <div className="PartnersContainer">
      <div className="PartnersTextContainer">
        <div className="PartnersTextHeader">
          Unlock the Advantages of Partnership
        </div>
        <div className="PartnersText">
          As a valued partner/agent of Fredmind Taxidi Limited, you gain access to an array of benefits that empower you to thrive in the travel industry. We are committed to supporting your success and providing you with the resources needed to excel. When you partner with us, you can enjoy the following advantages:
          <br /><br />
          <b>Competitive Commissions:</b>
          <br />
          We recognize the value of your efforts in helping students fulfill their dreams of studying abroad. For every client you bring to us, you get %10 of the service charge. Your dedication and hard work deserve to be rewarded, and we are committed to ensuring your financial prosperity.
          <br /><br />
          <b>Access to Seasoned Professionals:</b>
          <br />
          Tap into the expertise of our seasoned professionals. We provide you with direct access to our knowledgeable team, who possess extensive experience and in-depth understanding of the travel industry. Whether you need guidance, support, or insights, our professionals are here to assist you every step of the way.
          <br /><br />
          <b>
               Monthly Training Sessions: 
          </b>
          <br />
          Stay ahead of the curve with our monthly training sessions exclusively designed for our partner/agents. These sessions are packed with valuable information, industry updates, and best practices to keep you well-informed and equipped with the latest knowledge. We believe in continuous learning and providing you with the tools to excel in the competitive travel market.
          <br /><br />
          <b>
            Visa Support:
          </b>
          <br />
          We understand the complexities of the visa process and the importance of seamless travel arrangements. As our partner/agent, you can rely on our dedicated visa support services. We will assist your applicants in preparing their visa applications, providing the necessary documentation, and offering guidance throughout the visa process. Our aim is to streamline the visa application process and enhance the chances of successful outcomes.
          <br /><br />
          <b>
            Additional Incentives:
          </b>
          <br />
          In addition to the core benefits, we provide our partner/agents with various other incentives as a token of our appreciation. These incentives may include rewards for outstanding performance, exclusive promotional materials, priority access to new services or destinations, and more. We believe in nurturing a mutually beneficial partnership and continuously strive to offer additional perks to support your growth.

          <br /><br />
          To explore these benefits and become our esteemed partner/agent, simply download the partnership agreement form from our website. Complete the form and submit it to us at partnership@fredmindtaxidi.com. We eagerly anticipate the opportunity to collaborate with you and embark on a fruitful partnership.
          <br /><br />
          Together, let&apos;s unlock new opportunities, achieve remarkable success, and make a lasting impact in the world of travel.

        </div>
        <div onClick={() => { }} className="DownloadForm">
          <span>Download Form</span>
        </div>
      </div>
      <div className="PartnersImageContainer">

      </div>


    </div>
  )
}








