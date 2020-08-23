import React from 'react'

import * as style from  './style.module.scss'

const DarkMode = (props) => {
  const { name, location, logo, title, description } = props;

  return (
    <div className={style.darkMode}>
      <div className={style.cardImg}>
        <img className={style.logo} src={logo.src} />
      </div>
      <div className={style.cardDesc}>
        <p className={style.company}>{name}</p>
        <p className={style.title}>{title}</p>
        <p className={style.location}>{location}</p>
        {/* <p>{description}</p> */}
      </div>
    </div>
  )
}

export default DarkMode