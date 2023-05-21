import Header from "../components/Header"
import { ImHourGlass } from 'react-icons/Im';
import { BsGridFill, BsStar, BsStars } from 'react-icons/Bs';
import { AiFillCheckCircle } from 'react-icons/Ai';
import './styles.css'
export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col">
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
    <div className=" flex headerLanding bg-cover bg-center h-screen w-full px-16" >
      <Header />
      <Body1 />
    </div>
  )
}
const Body1 = () => {
  return (
    <div className="Body1 " >
      <div className="Body1Text1 ">Travel Seamlessly</div>
      <div className="Body1Text2 ">Exploring The World, Accessing Global <span>Opportunities</span> </div>
      <div className="Body1Text3 ">We Are On A Mission To Make Traveling Around The World Easy by
        creating flexibility to traveling, work & Study overseas
        accessing global Opportunities.
      </div>
    </div>
  )
}
const Body2 = () => {
  return (
    <div className="Body2 " >
      <div className="Body2Text1 ">Meet Quality, Get Value</div>
      <div className="Body2Text2 ">Travel Riders - We Ride You To Your Destinations </div>
      <div className="Body2Text3 ">We Are On A Mission To Make Traveling Around The World Easy by creating
        flexibility to traveling, work & Study overseas accessing global Opportunities
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', }}>
        <IconCircleContainer IconName={ImHourGlass} title="Best Tour Guide" caption="We help you plan your trip, hold-you-by-hand”,
        step-by-step guide & support for achieving your
        overseas dream, even if it is your first time.
      "/>
        <IconCircleContainer IconName={BsGridFill} title="Lots Of Choices" caption="Migrate & Start your Dream career in UK,
          Canada, USA, Australia & Ireland." />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', }}>
        <IconCircleContainer IconName={BsStars} title="Travel Made Easy" caption="We have the vision to take you round 
          the world from your comfort zone"/>
        <IconCircleContainer IconName={BsStar} title="Flexibility" caption="Experience the flexibility to Travel,
          Work & Study in your Dream Country." />
      </div>
    </div>
  )
}
const Body3 = () => {
  return (
    <div className="Body3 px-16" >
      <div className="AboutContainer ">
        <div className="AboutLeft">
          <div className="AboutTitle">
            ABOUT US
          </div>
          <div className="AboutText">
            Welcome to Fredmind Taxidi, where we offer a
            wide range of services to make our travel experience
            seamless and hassle-free. Whether you are an individual
            traveler, a corporate entity, or a group of friends or family,
            we have the expertise and experience to cater to your needs.
            Here are some of the services we offer.
          </div>
          <div className="AboutButton">
            <span>Read More</span>
          </div>
        </div>
        <div className="AboutRight">
          <AboutRightList text="Admission Application & Processing" />
          <AboutRightList text="Visa Application & Processing" />
          <AboutRightList text="Corporate, Business & Group Tours" />
          <AboutRightList text="Flight Ticketing & Reservation" />
          <AboutRightList text="Accommodation Booking" />
          <AboutRightList text="Scholarships" />
        </div>
      </div>
      <div className="AboutContainer ">
        <MoreAbout marginRight="20px" header="Admission Application & Processing" text="We understand the challenges that come with applying
          for admission to foreign universities or institutions. Our 
          team of experts is well-equipped to help you with the 
          admission process, from providing advice on the necessary
          documents to preparing your application package and 
          submitting it to the institution of your choice."/>
        <MoreAbout marginLeft="20px" header="Visa Application & Processing" text="Our visa application and processing services are designed to
          make the visa application process as smooth as possible. We
          will guide you through the visa requirements, help you prepare
          the necessary documents, and submit the application on your
          behalf. Our goal is to help you obtain your visa without any
          stress or hassle"/>
      </div>

      <div className="AboutContainer ">
        <MoreAbout marginRight="20px" header="Corporate, Business & Group Tours" text="If you are a business traveler or traveling as a group, we
          have tailor-made packages that cater to your specific 
          needs. Our corporate and group tours are designed to
          ensure that you have a comfortable and productive trip. 
          We will take care of all the logistics, including flights,
          accommodations, and transportation."/>
        <MoreAbout marginLeft="20px" header="Flight Ticketing & Reservation" text="We offer flight booking and reservation services to ensure that
          you get the best deals on your flights. Our team of experts will 
          help you find the most convenient flights at the best prices.
          We will also assist you with flight changes or cancellations
          if necessary.
          "/>
      </div>

      <div className="AboutContainer ">
        <MoreAbout marginRight="20px" header="Accommodation Booking" text="We understand the importance of finding the right 
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
        <MoreAbout marginLeft="20px" header="Scholarships" text="We also offer scholarship services to help you secure funding for
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


    </div>
  )
}
const IconCircleContainer = ({ IconName = ImHourGlass, title = '', caption = '' }) => {
  return (
    <div className="iconCircleContainer" >
      <div className="CircleContainer ">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
          <IconName color="#699BF7" size={53} />
        </div>
      </div>
      <div className="CircleText1 "> {title} </div>
      <div className="CircleText2 ">{caption}</div>
    </div>
  )
}
const AboutRightList = ({ text = '' }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '15px' }}>
      <AiFillCheckCircle size={20} color="#699BF7" />
      <div className="AboutRightListText">{text}</div>
    </div>
  )
}

const MoreAbout = ({ text = '', header = '', marginLeft = '0px', marginRight = '0px' }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '74px', marginLeft, marginRight }}>
      <div className="MoreAboutHeader">{header}</div>
      <div className="MoreAboutText">{text}</div>
    </div>
  )
}

const Service = () => {
  return (
    <div className="Body1 " >
      <div className="Body1Text1 ">Travel Seamlessly</div>
      <div className="Body1Text2 ">Exploring The World, Accessing Global <span>Opportunities</span> </div>
      <div className="Body1Text3 ">We Are On A Mission To Make Traveling Around The World Easy by
        creating flexibility to traveling, work & Study overseas
        accessing global Opportunities.
      </div>
    </div>
  )
}