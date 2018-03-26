
import React from 'react'
// import { navigateTo } from 'utils/routing'
// import Slider from 'react-slick'
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
      sessionStorage.setItem('productId', id)
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
    const { aboutImagePath, newsImagePath, news, products, projects, about } = this.props
    return (
      <div className={classes.homePage}>
        <div className={classes.content}>
          <div className={classes.middleContent}>
            <div className={classes.aboutUs}>
              <button className={classes.titleButton}>About Us</button>
              <img src={aboutImagePath} alt='' onClick={() => navigateTo('/about')} />
              { about &&
                <span> {about.content}</span>
               }
            </div>
            <div className={classes.news}>
              <button className={classes.titleButton}>News Center</button>
              <img src={newsImagePath} alt='' />
              <div className={classes.newsContent}>
                {
                  news && news.map((newsElement) =>
                    <li onClick={() => this.navigateNews(newsElement.id)}>
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
                    products && products.map((product) =>
                      <div>
                        <img src={product.imagePath} alt='' onClick={() => this.navigateProduct(product.id)} />
                      </div>,
                    )
                }
              </div>
            </div>
          </div>
          <div className={classes.slideContent}>
            <button className={classes.titleButton}>Products Center</button>
            <SlideDiv elements={projects} navigateProject={this.navigateProject} />
            { /*
              projects && projects.length > 0 &&
              <Slider {...settings}>
                <SlideDiv elements={projects} />
              </Slider> */
            }
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
