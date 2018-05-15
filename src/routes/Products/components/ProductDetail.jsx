import React from 'react'
import ReactHTMLConverter from 'react-html-converter'
import classes from './ProductDetail.scss'

const ProductDetail = (props) => (
  <div className={classes.contentInside}>
    <div className={classes.productDetail}>
      {new ReactHTMLConverter().convert(props.element.description)}
    </div>
  </div>
)
export default ProductDetail

