import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import { initHomePage, getInitNewsInHome, getInitProductInHome, getDetailProjectById,
  getInitAboutInHome, getInitProjectInHome }
  from '../modules/HomePage'

const mapStateToProps = (store) => ({
  aboutImagePath: store.home.aboutImagePath,
  newsImagePath: store.home.newsImagePath,
  news: store.home.news,
  productTypeGroups: store.home.productTypeGroups,
  projects: store.home.projects || [],
  project: store.home.project || {},
  about: store.home.about,
})

const mapDispatchToProps = {
  initHomePage,
  getInitNewsInHome,
  getInitProductInHome,
  getInitProjectInHome,
  getInitAboutInHome,
  getDetailProjectById,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
