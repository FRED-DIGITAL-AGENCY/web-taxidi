import Typewriter from "typewriter-effect"

export const Body1 = () => {

  function openInNewTab(url: string) {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  }
  return (
    <div className="Body1 " >
      <div data-aos="fade-up" data-aos-delay="3000" data-aos-duration="1000" className="Body1Text1 ">Travel Seamlessly</div>
      <div data-aos="fade" data-aos-delay="3000" data-aos-duration="1000" className="Body1Text2 ">Exploring The World, Accessing Global <span data-aos="fade-right" data-aos-trigger="hover">
        <Typewriter
          options={{
            strings: ['Opportunities...'],
            autoStart: true,
            loop: true,

          }}
        />
      </span> </div>
      <div data-aos="fade-down" data-aos-delay="3000" data-aos-duration="1000" data-aos-reverse="true" className="Body1Text3 ">We Are On A Mission To Make Traveling Around The World Easy by
        creating flexibility to traveling, work & Study overseas
        accessing global Opportunities.
      </div>

      <div  data-aos="fade" data-aos-delay="3000" data-aos-duration="3000"onClick={() => openInNewTab('https://calendly.com/fredmindtaxidilimited/30min?month=2023-06')} style={{ marginTop:'32px' }} className="BookAConsultationBox">
        <span>Book A Consultation</span>
      </div>
    </div>
  )
}