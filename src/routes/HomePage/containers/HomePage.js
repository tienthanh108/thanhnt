import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import { initHomePage, getInitNewsInHome, getInitProductInHome, getInitAboutInHome, getInitProjectInHome }
  from '../modules/HomePage'

const mapStateToProps = (store) => ({
  aboutImagePath: store.home.aboutImagePath,
  newsImagePath: store.home.newsImagePath,
  news: store.home.news,
  productTypeGroups: store.home.productTypeGroups,
  projects: store.home.projects,
  about: store.home.about,
})

const mapDispatchToProps = {
  initHomePage,
  getInitNewsInHome,
  getInitProductInHome,
  getInitProjectInHome,
  getInitAboutInHome,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
