import React from 'react'
import './styles.css'
import Image from 'next/image'
import { fredmindBlackLogo, fredmindWhiteLogo } from '../assets/images/indexExport'
export default function Logo({dartMode=true,style={}}) {
  
  if(!dartMode){
    return(
      <div style={style} className="headerLogo">
      <div className="headerLogoImage">
        <Image style={{}} src={fredmindBlackLogo}/>
      </div>
      <div className="headerLogoLineDartMode"></div>
      <div className="headerLogoTextDartMode">FREDMIND TAXIDI LIMITED</div>
    </div>
    )
  }else{
     return (
    <div className="headerLogo">
        <div className="headerLogoImage">
        <Image style={{}} src={fredmindWhiteLogo}/>
        </div>
        <div className="headerLogoLine"></div>
        <div className="headerLogoText">FREDMIND TAXIDI LIMITED</div>
      </div>
  )
  }
 
}
