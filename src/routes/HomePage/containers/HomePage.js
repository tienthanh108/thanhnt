import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import { initHomePage, getInitNewsInHome, getInitProductInHome, getInitAboutInHome, getInitProjectInHome }
  from '../modules/HomePage'

<<<<<<< HEAD
const mapStateToProps = (state) => ({
  about: state.core.about,
  initNews: state.core.initNews,
  initProjects: state.core.initProjects,
  initProducts: state.core.initProducts,
=======
const mapStateToProps = (store) => ({
  aboutImagePath: store.home.aboutImagePath,
  newsImagePath: store.home.newsImagePath,
  news: store.home.news,
  products: store.home.products,
  projects: store.home.projects,
  about: store.home.about,
>>>>>>> master
})

const mapDispatchToProps = {
  initHomePage,
  getInitNewsInHome,
  getInitProductInHome,
  getInitProjectInHome,
  getInitAboutInHome,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
