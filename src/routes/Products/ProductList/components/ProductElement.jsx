import React from 'react'
import classes from './ProductElement.scss'

const ProductElement = (props) => (
  <div onClick={() => props.selectProduct(props.element.id)} className={classes.container}>
    <div> {props.element.name} </div>
    <img src={props.element.imagePath} alt='' />
  </div>
  )
export default ProductElement
