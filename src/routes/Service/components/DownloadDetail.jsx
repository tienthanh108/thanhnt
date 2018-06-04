import React from 'react'
import { Link } from 'react-router'
import classes from './DownloadDetail.scss'

const DownloadDetail = (props) => (
  <div className={classes.contentInside}>
    <div className={classes.productDetail}>
      {
        props.downloads && props.downloads.map((item, index) =>
          <div className={classes.content}>
            <Link key={`divDownload${index}`} to={item.path} target='_blank'>
              {item.name}
            </Link>
          </div>,
        )
      }
    </div>
  </div>
)
export default DownloadDetail

