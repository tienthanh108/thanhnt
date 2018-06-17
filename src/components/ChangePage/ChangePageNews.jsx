import React from 'react'
import classes from './ChangePage.scss'

const ChangePageNews = (props) => (
  <div className={classes.contentBottom}>
    <button
      onClick={() => props.function(props.minus5)}
    >
      <span className={classes.leftIcon} />
      <span className={classes.leftIcon} />
    </button>
    <button
      onClick={() => props.function(props.minus1)}
    > <span className={classes.leftIcon} /> </button>
    <div className={classes.pageNumber}>
      <input id={props.idInput} type='number' />/{props.maxPage}
    </div>
    <button className={classes.goButton}
      onClick={() => props.function(props.goto)}
    > GO </button>
    <button
      onClick={() => props.function(props.add1)}
    > <span className={classes.rightIcon} /> </button>
    <button
      onClick={() => props.function(props.add5)}
    >
      <span className={classes.rightIcon} />
      <span className={classes.rightIcon} />
    </button>
  </div>
)
export default ChangePageNews
