import React from 'react'
import { SiReact, SiRedux, SiFirebase, SiAmazonaws, SiNodeDotJs, SiGraphql } from 'react-icons/si';

import * as style from  '../styles/about.module.scss'
import profile from '../images/profile.jpg'

const About = (props) => (
  <div className={style.main}>
    <h2 className={style.title}>About Me</h2>
    <div className={style.boxes}>
      <div className={style.infoBox}>
        <p className={style.boxTitle}>Myself</p>
        <div className={style.info}>
          <p className={style.paragraph}>Hi! My name is Felix!</p>
          <p>I'm a fourth year Computer Science student at the <a href='https://uwaterloo.ca/'>University of Waterloo</a> :D</p>
          <p>My days consist of sleeping, coding, gaming, and watching sports!</p>
          {/* <p>Games I'm currently playing: <a href='https://playoverwatch.com/en-us/'>Overwatch</a> - <a href='https://playvalorant.com/en-us/'>Valorant</a> - <a href='https://fallguys.com/'>Fall Guys</a></p> */}
        </div>
      </div>
      <div className={style.arsenalBox}>
        <p className={style.boxTitle}>My Arsenal</p>
        <div className={style.arsenal}>
          <SiReact className={style.iconLink} />
          <SiRedux className={style.iconLink} />
          <div className={style.divider} />
          <SiFirebase className={style.iconLink} />
          <SiAmazonaws className={style.iconLink} />
          <div className={style.divider} />
          <SiNodeDotJs className={style.iconLink} />
          <SiGraphql className={style.iconLink} />
        </div>
      </div>
      <div className={style.gamesBox}>
        <p className={style.boxTitle}>Games I'm Currently Playing</p>
        <div className={style.info}>
          <p>Overwatch <span className={style.primary}>-</span> Valorant <span className={style.primary}>-</span> Fall Guys</p>
        </div>
      </div>
      <div className={style.sportsBox}>
        <p className={style.boxTitle}>Sports and Teams</p>
        <div className={style.info}>
          <p>Football (Manchester United) <span className={style.primary}>-</span> F1 (Max Verstappen) <span className={style.primary}>-</span> Overwatch League (Seoul Dynasty)</p>
        </div>
      </div>
    </div>
  </div>
)

export default About
