import React from 'react'
import * as style from  '../styles/style.module.scss'
import resume from '../files/Fransiskus_Felix_Mangundap_Resume.pdf'

const Contact = () => (
  <div className={`${style.layer} ${style.contact}`}>
    <div className={style.container}>
      <h2>contact me</h2>
      <p>don't hesitate to contact me, i love talking to new people!</p>
      <div className={style.links}>
        <a className={style.link} href={resume} target='_blank'>resume</a>
        <a className={style.link} href='mailto:ffmangun@uwaterloo.ca'>email</a>
        <a className={style.link} href='https://www.instagram.com/felix.mangundap/' target='_blank'>instagram</a>
        <a className={style.link} href='https://www.linkedin.com/in/felix-mangundap/' target='_blank'>linkedin</a>
        <a className={style.link} href='https://github.com/felixmangundap' target='_blank'>github</a>
      </div>
    </div>
  </div>
)

export default Contact
