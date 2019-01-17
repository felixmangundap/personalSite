import React from 'react'
import * as style from  '../styles/style.module.scss'

const Projects = () => (
  <div className={`${style.layer} ${style.projects}`}>
    <div className={style.container}>
      <h2>personal projects</h2>
      <p>during my last co-op term, i created <a href='https://datefromnow.com' target='_blank'>datefromnow</a> (<a href='https://github.com/felixmangundap/datefromnow' target='_blank'>github</a>), which is a simple date calculator, as a mini side project over a weekend. i'm planning to do more projects over the next few months! one projects at a time!</p>
    </div>
  </div>
)

export default Projects
