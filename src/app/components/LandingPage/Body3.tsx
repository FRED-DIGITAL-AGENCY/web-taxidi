import { JumpingGirl } from "@/app/assets/images/indexExport"
import Image from "next/image"
import { Element } from "react-scroll"
import { Footer } from "../Footer"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Partners from "../partners"

export const Body3 = () => {

    return (
      <div className="Body3 " >
        <div className="AboutContainer ">
          <Element name="ScrollToAboutUs">
            {
              <div className="AboutLeft">
                <div data-aos="flip-right"  data-aos-delay="400" data-aos-duration="1000" className="AboutTitle">
                  ABOUT US
                </div>
                <div data-aos="fade"  data-aos-delay="500" data-aos-duration="1000" className="AboutText">
                  Your gateway to seamless and hassle-free travel experience <br /><br />
  
                  Welcome to Fredmind Taxidi  Limited,Your Trusted Companion dedicated to making your travel experiences smooth, enjoyable, and stress-free. With a wide range of services tailored to meet your every need, we are committed to providing top-notch assistance throughout your journey. Whether you&apos;re planning a vacation, studying abroad, migrating to Canada, or seeking health care assistance, our dedicated team of experts is here to ensure your travel dreams become a reality.
  
                </div>
                <div data-aos="zoom-in"  data-aos-delay="600" data-aos-duration="1000" className="AboutButton">
                  <span>Read More</span>
                </div>
              </div>
            }
          </Element>
  
          <div className="AboutRight">
            <AboutRightList aosDelay='400' text="Admission Application & Processing" />
            <AboutRightList aosDelay='450' text="Visa Application & Processing" />
            <AboutRightList aosDelay='500' text="Corporate, Business & Group Tours" />
            <AboutRightList aosDelay='550' text="Flight Ticketing & Reservation" />
            <AboutRightList aosDelay='600' text="Accommodation Booking" />
            <AboutRightList aosDelay='650' text="English Proficiency Test (IELTS, GRE, GMAT & TOEFL & SAT)" />
          </div>
        </div>
        <Element name="ScrollToServiceContainer">
          {
            <div id="AboutContainer" className="AboutContainer ">
              <MoreAbout dataAos='fade-right' marginRight="20px" header="Study & Work Abroad" text="
              Unlock new horizons and expand your opportunities through international education and employment.
              We provide guidance and support throughout the entire process, including selecting suitable universities or job opportunities, preparing application documents, and navigating visa requirements. The service helps individuals explore study and work options abroad, enhancing their educational and career prospects."/>
              <MoreAbout dataAos='fade-left' marginLeft="20px" header="Visa Application & Processing" text="Simplify your visa journey and let us handle the paperwork, ensuring a seamless process.
  We have visas for international travel, whether for tourism, business, education, or work purposes. It involves providing guidance on the specific visa requirements, assisting with the completion of application forms, gathering supporting documents, and liaising with the relevant consulates or embassies to ensure a smooth and successful visa processing experience."/>
            </div>
          }
        </Element>
  
  
        <div className="AboutContainer ">
          <MoreAbout dataAos='fade-right' marginRight="20px" header="Corporate, Business & Group Tours" text="Fly stress-free and find your perfect stay with our seamless ticketing and accommodation solutions.
  We caters to corporate clients, businesses, and groups planning trips or vacations. It offers customized travel solutions to meet their specific needs, including organizing flights, accommodations, transportation, and itinerary planning. The service ensures a hassle-free travel experience, taking into account the preferences and objectives of the group, whether it's for team building, conferences, or leisure trips."/>
          <MoreAbout dataAos='fade-left' marginLeft="20px" header="Flight Ticketing & Hotel Reservation" text="Fly stress-free and find your perfect stay with our seamless ticketing and accommodation solutions.
  We assist individuals in booking flights to their desired destinations. It provides options for different airlines, departure times, and ticket prices, allowing customers to find the most suitable and affordable options. Additionally, it helps with hotel reservations, offering a wide range of accommodation options to meet the traveler's preferences, budget, and location requirements.
   "/>
        </div>
  
        <div className="AboutContainer ">
          <MoreAbout dataAos='fade-right' marginRight="20px" header="Accommodation Booking" text="Discover your home away from home with hassle-free accommodation booking tailored to your needs.
  We focus specifically on securing accommodations for travelers. It offers a comprehensive selection of hotels, resorts, apartments, and other lodging options at various price points and locations. The service assists in finding and booking accommodations that match the traveler's needs and preferences, ensuring a comfortable stay during their trip.
       "/>
          <MoreAbout dataAos='fade-left' marginLeft="20px" header="English Proficiency Test " text=" (IELTS, GRE, GMAT & TOEFL & SAT)  Master the language of success with our comprehensive test preparation and achieve your desired scores.
  We provides support to individuals preparing for English proficiency exams such as IELTS, GRE, GMAT, TOEFL, and SAT. We offer study materials, practice tests, and resources to help individuals improve their language skills and prepare effectively for these exams. The service aims to enhance their chances of success and achieve the required scores for academic or professional purposes, such as university admissions or employment opportunities.
  
           "/>
        </div>
        <ServiceContainer />
        <Partners/>
        <GetStarted />
        <Footer />
  
      </div>
    )
  }

  const AboutRightList = ({ text = '', aosDelay = '' }) => {

    return (
      <div data-aos="zoom-in"  data-aos-delay={aosDelay} data-aos-duration="1000" style={{ display: 'flex', flexDirection: 'row', marginTop: '15px' }}>
        <FontAwesomeIcon icon={faCheckCircle} size={'lg'} color="#699BF7" />
        <div className="AboutRightListText">{text}</div>
      </div>
    )
  }
  
  const MoreAbout = ({ text = '', header = '', marginLeft = '0px', marginRight = '0px', dataAos = '' }) => {
  
    return (
      <div className="MoreAbout" data-aos={dataAos}  data-aos-delay={'600'} data-aos-duration="1000" style={{ display: 'flex', flexDirection: 'column', marginTop: '74px', }}>
        <div className="MoreAboutHeader">{header}</div>
        <div className="MoreAboutText">{text}</div>
      </div>
    )
  }
  
  const ServiceContainer = () => {
  
  
    return (
      <Element name="ScrollToServiceContainer">
        {
          <div className="ServiceContainer " >
  
            <div data-aos={'fade-up'}  data-aos-delay={'700'} data-aos-duration="1000" className="ServiceImage">
              <Image alt=''  style={{ borderRadius: '30px' }} src={JumpingGirl} />
            </div>
  
            <div data-aos={'fade-down'}  data-aos-delay={'800'} data-aos-duration="1000" className="Services">
              <div className="ServicesHeader">Services</div>
             
              <ServicesList  text="Admission Application & Processing" />
            <ServicesList  text="Visa Application & Processing" />
            <ServicesList  text="Corporate, Business & Group Tours" />
            <ServicesList  text="Flight Ticketing & Reservation" />
            <ServicesList  text="Accommodation Booking" />
            <ServicesList  text="English Proficiency Test (IELTS, GRE, GMAT & TOEFL & SAT)" />
  
            </div>
  
            {/* <div  data-aos={'fade-up'}  data-aos-delay={'700'} data-aos-duration="1000"  className="StudyAbroad">
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
        }
      </Element>
  
    )
  }
  
  const ServicesList = ({ text = '' }) => {
  
    return (
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30px' ,marginBottom :'30px'}}>
        <div className="ServicesListBox"></div>
        <div className="ServicesListText">{text}</div>
      </div>
    )
  }
  
  const GetStarted = () => {
    return (
      <>
        <div data-aos={'fade'}  data-aos-delay={'700'} data-aos-duration="1000" className="StayConnected">
          Stay Connected
        </div>
        <div className="GetStartedContainer">
          <div data-aos={'fade'}  data-aos-delay={'700'} data-aos-duration="1000" className="GetStartedContainerText">Get Started With <span>FREDMIND!</span> </div>
          <div data-aos={'flip-up'}  data-aos-delay={'1000'} data-aos-duration="3000" className="GetStartedContainerButton"> <span>Get Started</span> </div>
  
        </div>
      </>
  
  
    )
  }