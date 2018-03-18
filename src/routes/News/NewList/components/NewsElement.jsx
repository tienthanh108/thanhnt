import React from 'react'
import { navigateTo } from 'utils/routing'
import { Link } from 'react-router'
import ReactHTMLConverter from 'react-html-converter'
import classes from './NewsElement.scss'
import { isEmpty } from '../../../../utils/commonLogicApp'

class NewsElement extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  componentWillMount() {
  }

  navigateDetailNews = (newId) => {
    sessionStorage.setItem('newId', newId)
    navigateTo('/news/detail')
  }

  subContent = (item) => {
    if (item && isEmpty(item.subTitle) && !isEmpty(item.content)) {
      return item.content.substring(0, 200)
    }

    return item ? item.subTitle : ''
  }

  render() {
    const htmlConvert = new ReactHTMLConverter()
    const { element } = this.props
    return (
      <div className={classes.container}>
        <img src={this.props.element.image_path} alt='' />
        <div className={classes.content}>
          <div className={classes.header}>
            <div className={classes.title}>
              <Link className={classes.forgetPassword} onClick={() => this.navigateDetailNews(element.id)}>
                { element.title }
              </Link>
            </div>
            <div className={classes.link}>
              {element.date}
            </div>
          </div>
          <div>
            {htmlConvert.convert(this.subContent(this.props.element))}
          </div>
        </div>
      </div>
    )
  }

}
export default NewsElement
