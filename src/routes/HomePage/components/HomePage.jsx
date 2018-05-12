
import React from 'react'
import ReactHTMLConverter from 'react-html-converter'
import classes from './HomePage.scss'
import SlideDiv from './SlideDiv'
import { navigateTo } from '../../../utils/routing'


class HomePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
    this.props.initHomePage()
  }

  componentWillUnmount() {
  }

  navigateProduct = (id) => {
    if (id) {
      sessionStorage.setItem('prodTypeGrpId', id)
      navigateTo('/products')
    }
  }

  navigateNews = (id) => {
    if (id) {
      sessionStorage.setItem('newId', id)
      navigateTo('/news/detail')
    }
  }

  navigateProject = (id) => {
    if (id) {
      sessionStorage.setItem('projectId', id)
      navigateTo('/projects')
    }
  }


  render() {
    const { aboutImagePath, newsImagePath, news, productTypeGroups, projects, about } = this.props
    return (
      <div className={classes.homePage}>
        <div className={classes.content}>
          <div className={classes.middleContent}>
            <div className={classes.aboutUs}>
              <button className={classes.titleButton}>About Us</button>
              <img src={aboutImagePath} alt='' onClick={() => navigateTo('/about')} />
              { about &&
                new ReactHTMLConverter().convert(about.content)
                // <span> {about.content}</span>
               }
            </div>
            <div className={classes.news}>
              <button className={classes.titleButton}>News Center</button>
              <img src={newsImagePath} alt='' />
              <div className={classes.newsContent}>
                {
                  news && news.map((newsElement, index) =>
                    <li key={index} onClick={() => this.navigateNews(newsElement.id)}>
                      {newsElement.title}
                    </li>,
                  )
                }
              </div>
            </div>
            <div className={classes.products}>
              <button className={classes.titleButton}>Products Center</button>
              <div className={classes.productsContent}>
                {
                  productTypeGroups && productTypeGroups.map((prodTypeGrp, index) =>
                    <div key={index}>
                      <img src={prodTypeGrp.imagePath} alt='' onClick={() => this.navigateProduct(prodTypeGrp.id)} />
                    </div>,
                    )
                }
              </div>
            </div>
          </div>
          <div className={classes.slideContent}>
            <button className={classes.titleButton}>Project Center</button>
            <SlideDiv elements={projects} navigateProject={this.navigateProject} />
          </div>
        </div>
      </div>
    )
  }
}


// HomePage.propTypes = {
//   googleLogin: React.PropTypes.func.isRequired,
//   facebookLogin: React.PropTypes.func.isRequired,
// }

export default HomePage
