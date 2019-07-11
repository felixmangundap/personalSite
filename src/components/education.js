import React from 'react'
import * as style from  '../styles/style.module.scss'

const Education = (props) => (
  <div className={`${style.layer} ${style.educations} ${props.darkMode ? style.darkMode : null}`}>
    <div className={style.container}>
      <h2>my education</h2>
      <p>i'm a student in the University of Waterloo, candidate for Bachelor of Computer Science '21.</p>
    </div>
  </div>
)

export default Education
