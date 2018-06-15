import React from 'react'
import classes from './ProjectElement.scss'

const ProjectElement = (props) => (
  <div onClick={() => props.selectProject(props.element.id)} className={classes.container}>
    <img src={props.element.imagePath} alt='' />
    <div className={classes.title}>
      {props.element.name}
    </div>
  </div>
  )
export default ProjectElement
