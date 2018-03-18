import React from 'react'
import { navigateTo } from 'utils/routing'
import classes from './LeftMenu.scss'

const Footer = () => (
  <div className={classes.container}>
    <h4>COMPANY PROFILE</h4>
    <button onClick={() => navigateTo('/about/introduction')}> DMX Introduction </button>
    <button onClick={() => navigateTo('/about/honor')}> DMX Honor </button>
    <button onClick={() => navigateTo('/about/pursuit')}> DMX Pursuit </button>
  </div>
  )
export default Footer
