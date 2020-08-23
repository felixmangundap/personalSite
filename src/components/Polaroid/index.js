import React from 'react'

import * as style from  './style.module.scss'

const Polaroid = (props) => {
  const { image, title, location, year, classes } = props;

  return (
    <div className={`${style.polaroid} ${classes}`}>
      <div className={style.boxPhoto}>
        {image ?
          <img className={style.boxImg} src={image} />
          : <div className={style.black} />
        }
      </div>
      <div className={style.info}>
        <p className={style.title}>{title}</p>
        <p className={style.location}>{location}</p>
      </div>
    </div>
  )
}

export default Polaroid