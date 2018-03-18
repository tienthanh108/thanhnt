import React from 'react'
import classes from './ServiceElement.scss'

const ServiceElement = (props) => (
  <div onClick={() => props.selectProduct(props.element.id)} className={classes.container}>
    <div> {props.element.name} </div>
    <img src={props.element.imagePath} alt='' />
  </div>
  )
export default ServiceElement
