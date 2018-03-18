import React from 'react'
import classes from './LeftMenu.scss'

const Footer = (props) => (
  <div className={classes.container}>
    {
      props.elements && props.elements.map((element, index) =>
        <button key={index}
          onClick={() => props.selectCategory(element.id)}
          className={element.active ? classes.active : ''}
        >
          {element.name}
        </button>,
      )
    }
  </div>
  )
export default Footer
