import React from 'react'
import * as style from  '../styles/style.module.scss'
import resume from '../files/Fransiskus_Felix_Mangundap_Resume.pdf'

const Contact = (props) => (
  <div className={`${style.layer} ${style.contact} ${props.darkMode ? style.darkMode : null}`}>
    <div className={style.container}>
      <h2>contact me</h2>
      <p>don't hesitate to contact me, i love talking to new people!</p>
      <div className={style.links}>
        <a className={style.link} href={resume} rel="noopener noreferrer" target='_blank'>resume</a>
        <a className={style.link} href='mailto:ffmangun@uwaterloo.ca'>email</a>
        <a className={style.link} href='https://www.instagram.com/felix.mangundap/' rel="noopener noreferrer" target='_blank'>instagram</a>
        <a className={style.link} href='https://www.linkedin.com/in/felix-mangundap/' rel="noopener noreferrer" target='_blank'>linkedin</a>
        <a className={style.link} href='https://github.com/felixmangundap' rel="noopener noreferrer" target='_blank'>github</a>
      </div>
    </div>
  </div>
)

export default Contact
