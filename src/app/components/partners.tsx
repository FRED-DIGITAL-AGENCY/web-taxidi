import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { ApplyboardLogo, KcOverseasLogo, VisaLogo } from '../assets/images/indexExport';
export default function Partners() {
  return (
    <div className="partnersContainer">
        <div className="partnersheader">

        </div>

        <div className="partnersImageContainer">
            <div className="partnersImage">
            <Carousel>
                <div>
                    <Image src={ApplyboardLogo} />
                </div>
                <div>
                    <Image src={KcOverseasLogo} />
                </div>
                <div>
                    <Image src={VisaLogo} />
                </div>
            </Carousel>
            </div>
        </div>
    </div>
  )
}
