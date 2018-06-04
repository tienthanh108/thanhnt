import React from 'react'
import classes from './LeftMenu.scss'

const LeftMenu = (props) => (
  <div className={classes.container}>
    <h4>SERVICES</h4>
    {
      props.elements && props.elements.map((element, index) =>
        <button key={index}
          onClick={() => props.selectCategory(element.parValue)}
          className={element.active ? classes.active : ''}
        >
          {element.parName}
        </button>,
      )
    }
  </div>
  )
export default LeftMenu
