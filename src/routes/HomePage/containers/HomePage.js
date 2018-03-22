import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
// import { getHomeParams } from '../modules/HomePage'

const mapStateToProps = (state) => ({
  about: state.core.about,
  initNews: state.core.initNews,
  initProjects: state.core.initProjects,
  initProducts: state.core.initProducts,
})

const mapDispatchToProps = {
  // getHomeParams,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
