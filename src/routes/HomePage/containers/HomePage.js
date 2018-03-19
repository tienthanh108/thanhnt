import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
// import { getHomeParams } from '../modules/HomePage'

const mapStateToProps = (state) => ({
  homeParams: state.homeParams,
})

const mapDispatchToProps = {
  // getHomeParams,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
