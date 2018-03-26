import React from 'react'
import classes from './LeftMenu.scss'

const LeftMenu = (props) => (
  <div className={classes.container}>
    <h4>SERVICES</h4>
    <button onClick={() => props.selectCategory('PELEDGE')}> Cam kết dịch vụ </button>
    <button onClick={() => props.selectCategory('RECRUITMENT')}> Tuyển dụng </button>
  </div>
  )
export default LeftMenu
