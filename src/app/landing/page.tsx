'use client'
import Header from "../components/Header"


import './styles.css'
import Image from "next/image";
import { JumpingGirl } from "../assets/images/indexExport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faCheckCircle, faHourglass, faStarOfDavid } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Logo from "../components/Logo";
import { useEffect } from "react";
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out-back'
    });
  }, [])


  return (
    <main className="flex min-h-screen  min-w-screen  flex-col">
      <LandingPage />
      <Body2 />
      <div className="Body3BG">
        <Body3 />
      </div>
    </main>
  )
}
const LandingPage = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className=" flex headerLanding bg-cover bg-center h-screen w-full " >
      <Header />
      <Body1 />
    </div>
  )
}
const Body1 = () => {
  return (
    <div className="Body1 " >
      <div data-aos="fade-up" data-aos-type="write-in-left" data-aos-delay="3000" data-aos-duration="1000" className="Body1Text1 ">Travel Seamlessly</div>
      <div data-aos="fade" data-aos-delay="3000" data-aos-duration="1000" className="Body1Text2 ">Exploring The World, Accessing Global <span data-aos="fade-right" data-aos-trigger="hover">Opportunities</span> </div>
      <div data-aos="fade-down" data-aos-delay="3000" data-aos-duration="1000" data-aos-reverse="true" className="Body1Text3 ">We Are On A Mission To Make Traveling Around The World Easy by
        creating flexibility to traveling, work & Study overseas
        accessing global Opportunities.
      </div>
    </div>
  )
}
const Body2 = () => {
  return (
    <div className="Body2 " >
      <div data-aos="fade-up" data-aos-type="write-in-left" data-aos-duration="1000" className="Body2Text1 ">Meet Quality, Get Value</div>
      <div data-aos="flip-up" data-aos-type="write-in-left" data-aos-delay="50" data-aos-duration="1000" className="Body2Text2 ">Travel Riders - We Ride You To Your Destinations </div>
      <div data-aos="fade-down" data-aos-type="write-in-left" data-aos-delay="100" data-aos-duration="1000" className="Body2Text3 ">We Are On A Mission To Make Traveling Around The World Easy by creating
        flexibility to traveling, work & Study overseas accessing global Opportunities
      </div>
      <div  className="IconCircleContainer " style={{ display: 'flex', justifyContent: 'space-between', }}>
        <IconCircleContainer dataAos={'fade-down-right'} IconName={faHourglass} title="Best Tour Guide" caption="We help you plan your trip, hold-you-by-hand”,
        step-by-step guide & support for achieving your
        overseas dream, even if it is your first time.
      "/>

        <IconCircleContainer dataAos={'fade-down-left'} IconName={faBorderAll} title="Lots Of Choices" caption="Migrate & Start your Dream career in UK,
          Canada, USA, Australia & Ireland." />
      </div>
      {/* <div  className="IconCircleContainer " style={{ display: 'flex', justifyContent: 'space-between', }}>

        <IconCircleContainer dataAos={'fade-up-right'} IconName={faStarOfDavid} title="Travel Made Easy" caption="We have the vision to take you round 
          the world from your comfort zone"/>
        <IconCircleContainer dataAos={'fade-up-left'} IconName={faStar} title="Flexibility" caption="Experience the flexibility to Travel,
          Work & Study in your Dream Country." />
      </div> */}
    </div>
  )
}
const Body3 = () => {
  return (
    <div className="Body3 " >
      <div className="AboutContainer ">
        <div className="AboutLeft">
          <div data-aos="flip-right" data-aos-type="write-in-left" data-aos-delay="400" data-aos-duration="1000" className="AboutTitle">
            ABOUT US
          </div>
          <div data-aos="fade" data-aos-type="write-in-left" data-aos-delay="500" data-aos-duration="1000" className="AboutText">
            Welcome to Fredmind Taxidi, where we offer a
            wide range of services to make our travel experience
            seamless and hassle-free. Whether you are an individual
            traveler, a corporate entity, or a group of friends or family,
            we have the expertise and experience to cater to your needs.
            Here are some of the services we offer.
          </div>
          <div data-aos="zoom-in" data-aos-type="write-in-left" data-aos-delay="600" data-aos-duration="1000" className="AboutButton">
            <span>Read More</span>
          </div>
        </div>
        <div className="AboutRight">
          <AboutRightList aosDelay='400' text="Admission Application & Processing" />
          <AboutRightList aosDelay='450' text="Visa Application & Processing" />
          <AboutRightList aosDelay='500' text="Corporate, Business & Group Tours" />
          <AboutRightList aosDelay='550' text="Flight Ticketing & Reservation" />
          <AboutRightList aosDelay='600' text="Accommodation Booking" />
          <AboutRightList aosDelay='650' text="Scholarships" />
        </div>
      </div>
      <div className="AboutContainer ">
        <MoreAbout dataAos='fade-right' marginRight="20px" header="Admission Application & Processing" text="We understand the challenges that come with applying
          for admission to foreign universities or institutions. Our 
          team of experts is well-equipped to help you with the 
          admission process, from providing advice on the necessary
          documents to preparing your application package and 
          submitting it to the institution of your choice."/>
        <MoreAbout dataAos='fade-left' marginLeft="20px" header="Visa Application & Processing" text="Our visa application and processing services are designed to
          make the visa application process as smooth as possible. We
          will guide you through the visa requirements, help you prepare
          the necessary documents, and submit the application on your
          behalf. Our goal is to help you obtain your visa without any
          stress or hassle"/>
      </div>

      <div className="AboutContainer ">
        <MoreAbout dataAos='fade-right' marginRight="20px" header="Corporate, Business & Group Tours" text="If you are a business traveler or traveling as a group, we
          have tailor-made packages that cater to your specific 
          needs. Our corporate and group tours are designed to
          ensure that you have a comfortable and productive trip. 
          We will take care of all the logistics, including flights,
          accommodations, and transportation."/>
        <MoreAbout dataAos='fade-left' marginLeft="20px" header="Flight Ticketing & Reservation" text="We offer flight booking and reservation services to ensure that
          you get the best deals on your flights. Our team of experts will 
          help you find the most convenient flights at the best prices.
          We will also assist you with flight changes or cancellations
          if necessary.
          "/>
      </div>

      <div className="AboutContainer ">
        <MoreAbout dataAos='fade-right' marginRight="20px" header="Accommodation Booking" text="We understand the importance of finding the right 
          accommodation for your trip. Whether you are looking for a 
          luxurious hotel or a budget-friendly option, we have a wide
          range of accommodation options to choose from. We will help
          you find the best accommodation that meets your needs and
          budget.Statement of Purpose: Our team of experts is
          well-equipped to help you write a compelling statement of 
          purpose. We will guide you through the process of drafting, 
          editing, and proofreading your statement to ensure that it
          showcases your skills, experience, and aspirations.
        "/>
        <MoreAbout dataAos='fade-left' marginLeft="20px" header="Scholarships" text="We also offer scholarship services to help you secure funding for
          your studies abroad. Our team will guide you through the
          scholarship application process and help you identify the best
          scholarships for your needs.
          At our travel company, we pride 
          ourselves on providing excellent customer service, and we
          are committed to making your travel experience unforgettable. 
          Contact us today to learn more about our services and how
          we can help you with your travel needs.
         "/>
      </div>
      <ServiceContainer />
      <GetStarted />
      <Footer />

    </div>
  )
}
const IconCircleContainer = ({ dataAos = "fade-down", IconName = faHourglass, title = '', caption = '' }) => {
  return (
    <div data-aos={dataAos} data-aos-type="write-in-left" data-aos-delay="400" data-aos-duration="2000" className="iconCircleContainer" >
      <div className="CircleContainer ">
        <div data-aos={'fade'} data-aos-type="write-in-left" data-aos-delay="600" data-aos-duration="3000" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>

          <FontAwesomeIcon icon={IconName} color="#699BF7" size={'3x'} />
        </div>
      </div>
      <div className="CircleText1 "> {title} </div>
      <div className="CircleText2 ">{caption}</div>
    </div>
  )
}
const AboutRightList = ({ text = '', aosDelay = '' }) => {

  return (
    <div data-aos="zoom-in" data-aos-type="write-in-left" data-aos-delay={aosDelay} data-aos-duration="1000" style={{ display: 'flex', flexDirection: 'row', marginTop: '15px' }}>
      <FontAwesomeIcon icon={faCheckCircle} size={'lg'} color="#699BF7" />
      <div className="AboutRightListText">{text}</div>
    </div>
  )
}

const MoreAbout = ({ text = '', header = '', marginLeft = '0px', marginRight = '0px',dataAos='' }) => {

  return (
    <div className="MoreAbout" data-aos={dataAos} data-aos-type="write-in-left" data-aos-delay={'600'} data-aos-duration="1000" style={{ display: 'flex', flexDirection: 'column', marginTop: '74px',  }}>
      <div className="MoreAboutHeader">{header}</div>
      <div className="MoreAboutText">{text}</div>
    </div>
  )
}

const ServiceContainer = () => {
  return (
    <div className="ServiceContainer " >

      <div  data-aos={'fade-up'} data-aos-type="write-in-left" data-aos-delay={'700'} data-aos-duration="1000"  className="ServiceImage">
        <Image style={{ borderRadius: '30px' }} src={JumpingGirl} alt="" />
      </div>

      <div  data-aos={'fade-down'} data-aos-type="write-in-left" data-aos-delay={'800'} data-aos-duration="1000"  className="Services">
        <div className="ServicesHeader">Services</div>
        <ServicesList text="Visa Application & Processing" />
        <ServicesList text="Study Abroad" />
        <ServicesList text="Work" />
        <ServicesList text="Migrate to Canada" />
        <ServicesList text="English Proficiency Test (IELTS, GRE, GMAT & TOEFL & SAT)" />
        <ServicesList text="Flight Ticketing" />
        <ServicesList text="Health Care Assistance" />
        <ServicesList text="Corporate, Business & Group Tours" />
        <ServicesList text="Flight & Hotel Reservation" />
        <ServicesList text="Accomodation Booking" />

      </div>

      {/* <div  data-aos={'fade-up'} data-aos-type="write-in-left" data-aos-delay={'700'} data-aos-duration="1000"  className="StudyAbroad">
        <div className="ServicesHeader">Study Abroad</div>
        <ServicesList text="We help You Shape Your Future" />
        <ServicesList text="Our Services" />
        <ServicesList text="Study Abroad Consultation" />
        <ServicesList text="Country, Course & University selection" />
        <ServicesList text="GApplication & Admission" />
        <ServicesList text="Visa Processing" />
        <ServicesList text="Pre-Departure Briefing" />
        <ServicesList text="Travel Assistance" />
      </div> */}

      <div>

      </div>
    </div>
  )
}

const ServicesList = ({ text = '' }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '15px' }}>
      <div className="ServicesListBox"></div>
      <div className="ServicesListText">{text}</div>
    </div>
  )
}

const GetStarted = () => {
  return (
    <>
      <div data-aos={'fade'} data-aos-type="write-in-left" data-aos-delay={'700'} data-aos-duration="1000"  className="StayConnected">
        Stay Connected
      </div>
      <div className="GetStartedContainer">
        <div data-aos={'fade'} data-aos-type="write-in-left" data-aos-delay={'700'} data-aos-duration="1000" className="GetStartedContainerText">Get Started With <span>FREDMIND!</span> </div>
        <div data-aos={'flip-up'} data-aos-type="write-in-left" data-aos-delay={'1000'} data-aos-duration="3000" className="GetStartedContainerButton"> <span>Get Started</span> </div>

      </div>
    </>


  )
}

const Footer = () => {
  return (
    <div data-aos={'fade'} data-aos-type="write-in-left" data-aos-delay={'1000'} data-aos-duration="3000" className="FooterContainer">
      <div className="lineDivider"></div>
      <Logo style={{ marginBottom: '20px' }} dartMode={false} />
      <div className="Footers">
        <div className="FooterRight">FREDMIND TAXIDI LTD is a reputable study abroad
          company that provides top-quality services to
          students who wish to pursue their education in foreign
          countries. The company is based in Nigeria and has
          been in operation for several years, making it one of
          the most experienced and reliable study abroad
          agencies in the country.
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} className="FooterLeft">
          <div style={{ display: 'flex', flexDirection: 'column', }}>
            <div className="FooterLeftHeader">Sitemap</div>
            <div className="FooterLeftText">Services</div>
            <div className="FooterLeftText">About Us</div>
            <div className="FooterLeftText">Booking</div>
            <div className="FooterLeftText">Cancellation</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', }}>
            <div className="FooterLeftHeader">Services</div>
            <div className="FooterLeftText">Statement of Purpose</div>
            <div className="FooterLeftText">Student Advisory</div>
            <div className="FooterLeftText">Scholarship</div>

          </div>

          <div style={{ display: 'flex', flexDirection: 'column', }}>
            <div className="FooterLeftHeader">Core Value</div>
            <div className="FooterLeftText">Openness</div>
            <div className="FooterLeftText">Transparency</div>
            <div className="FooterLeftText">Trust</div>
            <div className="FooterLeftText">Excellence</div>
            <div className="FooterLeftText">Collaboration</div>
          </div>
        </div>


      </div>

      <div className="lineDivider"></div>

      <div className="allRight">
        <div className="allRightLeft">
          2023 All Rights Reserved
        </div>
        <div className="allRightRight">

          <div className="termsAndCondition">
            Terms & Conditions
          </div>
          <div className="termsAndCondition">
            Privacy
          </div>
          <div className="termsAndCondition">
            Policy
          </div>

        </div>
      </div>
    </div>
  )
}