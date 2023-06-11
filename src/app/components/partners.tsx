import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { ApplyboardLogo, KcOverseasLogo, VisaLogo } from '../assets/images/indexExport';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
export default function Partners() {
    useEffect(() => {
        AOS.init({
          easing: 'ease-in-out-back'
        });
      }, [])
    return (
        <div className="partnersContainer">
            <div 
            data-aos={'fade'}  data-aos-delay={'500'} data-aos-duration="1000" 
            className="partnersheader">
                Our Partners
            </div>

            <div 
            data-aos={'zoom'}  data-aos-delay={'700'} data-aos-duration="2000"  
            className="partnersImageContainer">

                <FontAwesomeIcon size='xl' icon={faArrowLeft} color='#85BEDA'/>
                <div className="partnersImage">

                    <div style={{marginLeft:'5px',marginRight:'5px'}}>
                        <Image   width={135} src={ApplyboardLogo} />
                    </div>
                    
                    <div style={{marginLeft:'5px',marginRight:'5px'}}>
                        <Image   width={135} src={VisaLogo} />
                    </div>
                    <div style={{marginLeft:'5px',marginRight:'5px'}}> 
                        <Image   width={135} src={KcOverseasLogo} />

                    </div>

                </div>
                <FontAwesomeIcon size='xl' icon={faArrowRight} color='#85BEDA'/>
            </div>
        </div>
    )
}
