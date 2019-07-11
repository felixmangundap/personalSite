import React from 'react'
import * as style from  '../styles/style.module.scss'

const Projects = (props) => (
  <div className={`${style.layer} ${style.projects} ${props.darkMode ? style.darkMode : null}`}>
    <div className={style.container}>
      <h2>personal projects</h2>
      <p>during my last co-op term, i created <a href='https://datefromnow.com' rel="noopener noreferrer" target='_blank'>datefromnow</a> (<a href='https://github.com/felixmangundap/datefromnow' rel="noopener noreferrer" target='_blank'>github</a>), which is a simple date calculator, as a mini side project over a weekend. i'm currently building a web app to showcase our side projects, and i'm planning to do more projects over the next few months! one project at a time!</p>
    </div>
  </div>
)

export default Projects
