import React , { useState, useEffect } from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import * as style from  '../styles/landing.module.scss'
import Polaroid from '../components/Polaroid'

import iceland from '../images/iceland.jpg'
import antelope from '../images/antelope.jpeg'
import banff from '../images/banff.jpeg'
import resume from '../files/Fransiskus_Felix_Mangundap_Resume.pdf'

const Landing = (props) => {
  const [slide, setSlide] = useState(0);

  const interval = 3000;
  
  useEffect(()=>{
    const loop = setInterval(()=>{
        if (slide === 2){
            setSlide(0);
        } else{
            setSlide(slide + 1);
        }
    }, interval);
    return () => clearInterval(loop); 
  }, [slide, interval]);

  return (
    <div id='landing' className={style.main}>
      <div className={style.leftContainer}>
        <h1 className={style.title}>Hello, I'm <span className={style.primary}>Felix</span></h1>
        <div className={style.links}>
          <a className={style.linkButton} href={resume} rel="noopener noreferrer" target='_blank'>Resume</a>
          <a className={style.link} href='mailto:felix.mangundap@gmail.com'><FaEnvelope /></a>
          <a className={style.link} href='https://www.linkedin.com/in/felix-mangundap/' rel="noopener noreferrer" target='_blank'><FaLinkedin /></a>
          <a className={style.link} href='https://github.com/felixmangundap' rel="noopener noreferrer" target='_blank'><FaGithub /></a>
          <a className={style.link} href='https://www.instagram.com/felix.mangundap/' rel="noopener noreferrer" target='_blank'><FaInstagram /></a>
        </div>
      </div>
      <div className={style.rightContainer}>
        <div className={style.polaroidContainer}>
          <Polaroid 
            title={'Dummy Title!'}
            location={'Location, 2019'}
            classes={`${style.right2} ${style.abs}`}
          />
          <Polaroid 
            title={'Dummy Title!'}
            location={'Location, 2019'}
            classes={`${style.left2} ${style.abs}`}
          />
          <Polaroid 
            title={'Dummy Title!'}
            location={'Location, 2019'}
            classes={`${style.center} ${style.abs}`}
          />
          {slide < 3 && <Polaroid 
            image={banff}
            title={'Cloudy == Sad'}
            location={'Lake Louise, 2019'}
            classes={`${style.right1} ${style.abs}`}
          />}
          {slide < 2 && <Polaroid 
            image={antelope}
            title={'The famous antelope canyon!'}
            location={'Antelope Canyon, 2018'}
            classes={`${style.left1} ${style.abs}`}
          />}
          {slide < 1 && <Polaroid
            image={iceland}
            title={'Northern Lights!'}
            location={'Reykjavik, 2019'}
            classes={`${style.center} ${style.abs}`}
          />}
        </div>
        <h2 className={style.polaroidTitle}>The World Through My Polaroids</h2>
      </div>
    </div>
  )
}

export default Landing
