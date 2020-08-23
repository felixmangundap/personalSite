import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


import * as style from  './style.module.scss'

const ProjectCard = (props) => {
  const { name, image, github, site, type, description } = props;

  return (
    <div className={style.card}>
      <div className={style.cardImg}>
        <img className={style.image} src={image.src} />
      </div>
      <div className={style.cardDesc}>
        <p className={style.name}>{name}</p>
        <p className={style.type}>{type}</p>
        <p className={style.description}>{description}</p>
      </div>
      <div className={style.links}>
        <a href={github} className={style.link}><FaGithub className={style.icon}/></a>
        <a href={site} className={style.link}><FaExternalLinkAlt className={style.icon}/></a>
      </div>
    </div>
  )
}

export default ProjectCard