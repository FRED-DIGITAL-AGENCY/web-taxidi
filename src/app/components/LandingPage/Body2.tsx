import { faBorderAll, faHourglass, faStar, faStarOfDavid } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Body2 = () => {
    return (
      <div className="Body2 " >
        <div data-aos="fade-up" data-aos-type="write-in-left" data-aos-duration="1000" className="Body2Text1 ">Meet Quality, Get Value</div>
        <div data-aos="flip-up" data-aos-type="write-in-left" data-aos-delay="50" data-aos-duration="1000" className="Body2Text2 ">Travel Riders - We Ride You To Your Destinations </div>
        <div data-aos="fade-down" data-aos-type="write-in-left" data-aos-delay="100" data-aos-duration="1000" className="Body2Text3 ">We Are On A Mission To Make Traveling Around The World Easy by creating
          flexibility to traveling, work & Study overseas accessing global Opportunities
        </div>
        <div className="IconCircleContainer " >
          <IconCircleContainer dataAos={'fade-down-right'} IconName={faHourglass} title="Best Tour Guide" caption="We help you plan your trip, hold-you-by-hand”,
          step-by-step guide & support for achieving your
          overseas dream, even if it is your first time.
        "/>
  
          <IconCircleContainer dataAos={'fade-down-right'} IconName={faBorderAll} title="Lots Of Choices" caption="Migrate & Start your Dream career in UK,
            Canada, USA, Australia & Ireland." />
        </div>
        <div className="IconCircleContainer " >
  
          <IconCircleContainer dataAos={'fade-up-right'} IconName={faStarOfDavid} title="Travel Made Easy" caption="We have the vision to take you round 
            the world from your comfort zone"/>
          <IconCircleContainer dataAos={'fade-up-right'} IconName={faStar} title="Flexibility" caption="Experience the flexibility to Travel,
            Work & Study in your Dream Country." />
        </div>
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