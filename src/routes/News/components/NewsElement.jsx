import React from 'react'
import { navigateTo } from 'utils/routing'
import classes from './NewsElement.scss'

const NewsElement = (props) => (
  <div onClick={() => navigateTo('newsDetail')} className={classes.container}>
    <img src={props.element.src} alt='' />
    <div className={classes.content}>
      <div className={classes.header}>
        <div className={classes.title}>
          {props.element.title}
        </div>
        <div className={classes.date}>
          {props.element.date}
        </div>
      </div>
      <div>
        {props.element.previewContent}
      </div>
    </div>
  </div>
  )
export default NewsElement
