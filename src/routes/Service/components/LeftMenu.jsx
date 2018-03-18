import React from 'react'
import classes from './LeftMenu.scss'

const LeftMenu = (props) => (
  <div className={classes.container}>
    <div className={classes.title}>
      <span>Dịch vụ & Hỗ trợ SERVICES</span>
    </div>
    <ul>
      <li onClick={() => props.selectCategory('PELEDGE')}>
        Cam kết dịch vụ
      </li>
      <li onClick={() => props.selectCategory('DOWNLOAD')}>
        Tải dữ liệu
      </li>
      <li onClick={() => props.selectCategory('RECRUITMENT')}>
        Tuyển dụng
      </li>
      <li onClick={() => props.selectCategory('QUERYANDFEEDBACK')}>
        Góp ý và phản hồi
      </li>
    </ul>
  </div>
  )
export default LeftMenu
