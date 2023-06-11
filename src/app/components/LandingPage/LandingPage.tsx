import { useEffect } from "react"
import Header from "../Header"
import { Body1 } from "./Body1"
import { gsap } from "gsap"

export const LandingPage = () => {
useEffect(() => {
  gsap.to(".headerLanding", {
    opacity:  "1",
    duration: '3'
  })

}, [])

    return (
      <div  className=" flex headerLanding bg-cover bg-center h-screen w-full " >
        <Header />
        <Body1 />
      </div>
    )
  }