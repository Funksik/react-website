import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-contrainer'>
        <video src="/videos/RunningVideo.mp4" autoPlay loop muted />
        <h1>CHCEŠ SE STÁT BĚŽCEM?</h1>
        <p>běhej zdravě s osobním ternérem</p>
        <div className="hero-btns">
            <Button 
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
            >
                JDU NA TO
            </Button>
            <Button 
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
            >
                VIDEO <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection