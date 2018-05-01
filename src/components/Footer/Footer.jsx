import React from 'react'
import classes from './Footer.scss'
import qrcode from '../../assets/qrcode.png'

const Footer = () => (
  <div className={classes.container}>
    <div className={classes.content}>
      <div className={classes.top} />
      <div className={classes.left}>
        <h4> Công ty cổ phần điện tử Phượng Hoàng </h4>
        <h5>LK 05-14 Khu đô thị An Hưng - Dương Nội - Hà Đông - Hà Nội</h5>
        <h5>Điện thoại liên hệ: 024 6671 1717</h5>
        <h5>Mr.Vinh: 0903 468 429</h5>
        <h5>Mr.Quân: 0933 991 338</h5>
        <h5>Email: dmxvietnamcskh@dmx-audio.com</h5>
      </div>
      <div className={classes.right}>
        <img src={qrcode} alt='qrCodeDMX' />
      </div>
      <div className={classes.bottom}>
        Copyright: Công ty cổ phần điện tử Phượng Hoàng Co., Ltd.
      </div>
    </div>
  </div>
  )

export default Footer
