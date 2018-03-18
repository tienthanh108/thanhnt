import React from 'react'
import classes from './Footer.scss'

const Footer = () => (
  <div className={classes.container}>
    <div className={classes.content}>
      <div className={classes.top} />
      <div className={classes.center}>
        <h4> 广州市锐高电子有限公司 </h4>
        <h5>地址：广州市番禺区番禺大道北555号产业大厦二座706-709</h5>
        <h5>电话：020-22883166 传真：020-22883266</h5>
        <h5>电话：020-22883166 传真：020-22883266</h5>
        <h5>电话：020-22883166 传真：020-22883266</h5>
      </div>
      <div className={classes.bottom}>
        Copyright: Guangzhou high-Rui Electronics Co., Ltd.
      </div>
    </div>
  </div>
  )
export default Footer
