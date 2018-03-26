import React from 'react'
import classes from './HomePage.scss'

const SlideDiv = (props) => (
  <div>
    {
      props.elements.map((element, index) =>
        <div className={classes.slide}>
          <img src={element.imagePath} alt='' id={index} />
          <a onClick={() => props.navigateProject(element.id)}>{element.name}</a>
        </div>,
      )
    }
  </div>
  )
export default SlideDiv
