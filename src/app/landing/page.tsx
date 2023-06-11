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
import { Element } from 'react-scroll';
import Typewriter from "typewriter-effect";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { Body2 } from "../components/LandingPage/Body2";
import { Body3 } from "../components/LandingPage/Body3";


export default function Home() {

  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out-back'
    });
  }, [])


  return (

    <Provider store={store}>
      <main className="flex min-h-screen  min-w-screen  flex-col">
        <LandingPage />
        <Body2 />
        <div className="Body3BG">
          <Body3 />
        </div>
      </main>
    </Provider>

  )
}







