import React from 'react'
import ReactHTMLConverter from 'react-html-converter'
import classes from './HomePage.scss'
import SlideDiv from './SlideDiv'
import { navigateTo } from '../../../utils/routing'
import DlgDetailProject from '../../../components/DlgDetailProject/DlgDetailProject'


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
      navigateTo('/products/list')
    }
  }

  navigateNews = (id) => {
    if (id) {
      sessionStorage.setItem('newId', id)
      navigateTo('/news/detail')
    }
  }

  navigateProject = (id) => {
    this.props.getDetailProjectById(id)
  }


  render() {
    const { aboutImagePath, newsImagePath, news, productTypeGroups, projects, about, project } = this.props
    return (
      <div className={classes.homePage}>
        <div className={classes.content}>
          <div className={classes.middleContent}>
            <div className={classes.aboutUs}>
              <button
                className={classes.titleButton}
                onClick={() => navigateTo('/contactUs')}
              >About Us</button>
              <img src={aboutImagePath} alt='' onClick={() => navigateTo('/about')} />
              { about &&
                new ReactHTMLConverter().convert(about.subtitle)
                // <span> {about.content}</span>
               }
            </div>
            <div className={classes.news}>
              <button className={classes.titleButton}
                onClick={() => navigateTo('/news/list')}
              >News Center</button>
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
              <button className={classes.titleButton}
                onClick={() => navigateTo('/products/list')}
              >Products Center</button>
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
            <div className={classes.buttonGroup}>
              <button className={classes.titleButton}
                onClick={() => navigateTo('/projects/list')}
              >Project Center</button>
              <button className={classes.titleButton2}
                onClick={() => navigateTo('/projects/list')}
              >MORE +</button>

            </div>
            <SlideDiv elements={projects} navigateProject={this.navigateProject} />
          </div>
        </div>
        <DlgDetailProject project={project} id='dlgDetailProjectHome' />
      </div>
    )
  }
}


// HomePage.propTypes = {
//   googleLogin: React.PropTypes.func.isRequired,
//   facebookLogin: React.PropTypes.func.isRequired,
// }

export default HomePage
