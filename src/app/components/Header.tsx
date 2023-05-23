import Logo from './Logo'
import './styles.css'
import React from 'react'

export default function Header() {
  return (
    <div className="headerbar">

      <Logo/>
      <div className="headerlistMenue">
        <div className="headerMenue">Home</div>
        <div className="headerMenue">About Us</div>
        <div className="headerMenue">Services</div>
        <div className="headerMenue">Our Impact</div>
        <div className="headerMenue">Our Partners</div>
        <div className="headerMenue">Events</div>
      </div>
      <div className="BookAConsultationBox">
        <span>Book A Consultation</span>
      </div>
    </div>
  )
}
