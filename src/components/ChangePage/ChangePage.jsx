import React from 'react'
import classes from './ChangePage.scss'

const ChangePage = (props) => (
  <div className={classes.contentBottom}>
    <button
      onClick={() => props.function(sessionStorage.getItem('currentType'), props.minus5)}
    >
      <span className={classes.leftIcon} />
      <span className={classes.leftIcon} />
    </button>
    <button
      onClick={() => props.function(sessionStorage.getItem('currentType'), props.minus1)}
    > <span className={classes.leftIcon} /> </button>
    <div className={classes.pageNumber}>
      <input id='pageNumberProduct' type='number' />/{props.maxPage}
    </div>
    <button className={classes.goButton}
      onClick={() => props.function(sessionStorage.getItem('currentType'), props.goto)}
    > GO </button>
    <button
      onClick={() => props.function(sessionStorage.getItem('currentType'), props.add1)}
    > <span className={classes.rightIcon} /> </button>
    <button
      onClick={() => props.function(sessionStorage.getItem('currentType'), props.add5)}
    >
      <span className={classes.rightIcon} />
      <span className={classes.rightIcon} />
    </button>
  </div>
)
export default ChangePage
