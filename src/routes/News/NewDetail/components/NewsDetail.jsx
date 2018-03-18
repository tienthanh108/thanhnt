import React from 'react'
// import speaker from 'assets/news1.jpg'
import ReactHTMLConverter from 'react-html-converter'
import classes from './NewsDetail.scss'

class NewsDetail extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  componentWillMount() {
    const newId = sessionStorage.getItem('newId')
    if (newId) {
      this.props.showDetailNews(newId)
    }
  }
  render() {
    const { detailNews } = this.props
    const htmlConvert = new ReactHTMLConverter()
    return (
      <div className={classes.container}>
        { detailNews &&
          <div className='container'>
            <div className='row'>
              <h2 className={classes.title}>{detailNews.title}</h2>
            </div>
            <div className='row'>
              <p className={classes.lines} >
                {detailNews.createDate}
              </p>
            </div>
            <div className='row'>
              <span className={classes.content}>
                {htmlConvert.convert(detailNews.content)}
              </span>
            </div>
          </div>
        }
      </div>
    )
  }
}

NewsDetail.propTypes = {
  showDetailNews: React.PropTypes.func.isRequired,
}

export default NewsDetail
