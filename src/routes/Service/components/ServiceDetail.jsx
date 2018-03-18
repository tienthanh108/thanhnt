import React from 'react'
import ReactHTMLConverter from 'react-html-converter'
import classes from './ServiceDetail.scss'

const ServiceDetail = (props) => (
  <div className={classes.contentInside}>
    <div className={classes.productDetail}>
      <img src={props.element.imagePath} alt={props.element.name} />
      {new ReactHTMLConverter().convert(props.element.description)}
    </div>
  </div>
)
export default ServiceDetail

