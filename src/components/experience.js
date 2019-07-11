import React from 'react'
import * as style from  '../styles/style.module.scss'

const Experience = (props) => (
  <div className={`${style.layer} ${style.experience} ${props.darkMode ? style.darkMode : null}`}>
    <div className={style.container}>
      <h2>work experience</h2>
      <p>in the past, i've built websites at the <a href='https://oicr.on.ca/' rel="noopener noreferrer" target='_blank'>Ontario Institute for Cancer Research</a> (twice) and built the <a href='https://hyperjar.com/' rel="noopener noreferrer" target='_blank'>HyperJar</a> mobile and web-app at <a href='http://www.finovertech.com/' rel="noopener noreferrer" target='_blank'>Finovertech</a>.
          currently, i'm interning as an application developer at <a href='https://ibm.com/' rel="noopener noreferrer" target='_blank'>IBM</a>, building both mobile and web app for large scale companies.</p>
      <p>in the future i'm looking for internship opportunities for winter 2020.</p>
    </div>
  </div>
)

export default Experience
