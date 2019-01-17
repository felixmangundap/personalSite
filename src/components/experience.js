import React from 'react'
import * as style from  '../styles/style.module.scss'

const Experience = () => (
  <div className={`${style.layer} ${style.experience}`}>
    <div className={style.container}>
      <h2>work experience</h2>
      <p>in the past, i've built websites at the <a href='https://oicr.on.ca/' target='_blank'>Ontario Institute for Cancer Research</a> (twice) and built the <a href='https://hyperjar.com/' target='_blank'>HyperJar</a> mobile and web-app at <a href='http://www.finovertech.com/'>Finovertech</a>.</p>
      <p>now, i'm looking for internship opportunities for summer 2019 and/or winter 2020.</p>
    </div>
  </div>
)

export default Experience
