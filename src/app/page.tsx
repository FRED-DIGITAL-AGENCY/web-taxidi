'use client'



import './styles.css'
import { useEffect } from "react";
import AOS from 'aos';
import { Provider } from 'react-redux'
import { Body2 } from './components/LandingPage/Body2';
import { Body3 } from './components/LandingPage/Body3';
import { LandingPage } from './components/LandingPage/LandingPage';
import store from './util/store/store';



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







