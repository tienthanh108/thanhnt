import React from 'react'
import classes from './LeftMenu.scss'

const LeftMenu = (props) => (
  <div className={classes.container}>
    <h4>COMPANY PROFILE</h4>
    {
      props.elements && props.elements.map((element, index) =>
        <button key={index}
          onClick={() => props.selectCategory(element.id)}
          className={element.active ? classes.active : ''}
        >
          {element.dmxType}
        </button>,
      )
    }
  </div>
  )
export default LeftMenu
