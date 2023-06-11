import Logo from "./Logo"

export const Footer = () => {
    return (
      <div data-aos={'fade'}  data-aos-delay={'1000'} data-aos-duration="3000" className="FooterContainer">
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
              <div className="FooterLeftHeader">Contact Us</div>
              <div className="FooterLeftText">Services</div>
              <div className="FooterLeftText">About Us</div>
              <div className="FooterLeftText">Booking</div>
              <div className="FooterLeftText">Cancellation</div>
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