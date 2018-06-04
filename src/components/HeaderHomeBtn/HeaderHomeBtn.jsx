import React from 'react'
import { navigateTo } from 'utils/routing'
import classes from './HeaderHomeBtn.scss'

const HeaderHomeBtn = () => (
  <div className={classes.container}>
    <button className={classes.button}
      onClick={() => navigateTo('/')}
    >
      Trang chủ
    </button>

  </div>
  )

export default HeaderHomeBtn
