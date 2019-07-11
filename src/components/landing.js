import React from 'react'
import * as style from  '../styles/style.module.scss'

const Landing = (props) => (
  <div id='landing' className={`${style.landing} ${style.layer} ${props.darkMode ? style.darkMode : null}`}>
    <div className={style.container}>
      <h1>hello, i'm felix</h1>
    </div>
  </div>
)

export default Landing
