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
import React from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out-back'
    });
  }, [])


  return (
    <main className="flex  min-h-screen partnersBody">
      <Header/>
      
    </main>
  )
}