import React, {useEffect, useState} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import mySvg from './assets/bg.svg';
import LogoColor from './assets/logocolor.svg';
import LogoOutline from './assets/logooutline.svg';
import { EmojiProvider, Emoji } from 'react-apple-emojis'
import emojiData from 'react-apple-emojis/lib/data.json'
import './assets/css/home.css'
import jwt from 'jwt-decode' 

const Home = () => {
    const location = useLocation();
    const [email, setEmail] = useState(null)
    useEffect(() => {decodeAccess()}, [])
    

    const decodeAccess = () => {
        const params = new URLSearchParams(location.hash);
        if ([...params.entries()].length == 5) setEmail(jwt([...params.entries()][0][1]).email)
    }
    const params = new URLSearchParams(location.hash);

    
    return (
        <>
            <header className="header-2">
  <div className="page-header min-vh-85 relative" style={{ 
      backgroundImage: `url(${mySvg})` 
    }}>
    <div className=" w-full ">
      <div className="row">
        <div className="flex flex-col  text-center mx-auto">
            <img src={LogoColor} alt="Logo" width="30%" className="mx-auto mb-8"/>
           
            {email ?
            <>
            <h1 className="text-white pt-3 text-9xl">Welcome to Mappin!</h1>
            <br/>
            <EmojiProvider data={emojiData}> <div className='flex flex-row justify-center mx-auto'> <Emoji name="party-popper" className="" width={90} /> <Emoji name="party-popper" className="" width={90} /><Emoji name="party-popper" className="" width={90} /></div> </EmojiProvider>
            <br/>
            <p className="lead text-white mt-3 mb-8 w-60 mx-auto text-5xl"> <span className='font-bold'>{email} </span> <br/> has been authenticated! <br/> <br/> Woop Woop, Glad to have you on board! Make your way back to the app to finish setting up your profile.</p>
            </>
            : 
            <>
            <h1 className="text-white pt-3 text-9xl">Welcome to Mappin!</h1>
            <p className="lead text-white mt-3 mb-8 w-60 mx-auto text-5xl"> Welcome to the first at-hand social platform to jot down, organise & share places you want to visit with friends.</p>
            </>
            }
            
            
            
            
        </div>
      </div>
    </div>

    <div className="position-absolute w-100 z-index-1 bottom-0">
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="moving-waves">
          <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
          <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
          <use xlinkHref="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
          <use xlinkHref="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,0.95" />
        </g>
      </svg>
    </div>
  </div>
</header>


<section className="pt-3 pb-4" id="count-stats">
  <div className=" mx-5">
    <div className="row">
      <div className="col-lg-9 z-index-2 border-radius-xl mt-n10 mx-auto py-3 blur shadow-blur">
        <div className="row">
          <div className="col-md-4 position-relative">
            <div className="p-3 text-center">
              <h1 className="text-gradient text-info"><span id="state1">Pins</span></h1>
              <h5 className="mt-3 text-3xl">Made for Speed</h5>
              <p className="text-2xl">Quickly add locations you want to visit! It is as quick as jotting to your notes section.</p>
            </div>
            <hr className="vertical dark"/>
          </div>
          <div className="col-md-4 position-relative">
            <div className="p-3 text-center">
              <h1 className="text-gradient text-info"> <span id="state2" countto="15">Lists</span></h1>
              <h5 className="mt-3 text-3xl">Prime Time Organisation</h5>
              <p className="text-2xl">Organise your Pins! Use labels and lists which you can share with your friends</p>
            </div>
            <hr className="vertical dark"/>
          </div>
          <div className="col-md-4">
            <div className="p-3 text-center">
              <h1 className="text-gradient text-info" id="state3" countto="4">Map</h1>
              <h5 className="mt-3 text-3xl">View nearby Pins on a Map!</h5>
              <p className="text-2xl"> Never miss a nearby bucket-list location again just becasue it was buried in a notes section somewhere.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default Home;
