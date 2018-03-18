import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
// import { facebookLogin, googleLogin } from '../modules/HomePage'

const mapStateToProps = (state) => ({
  locale: state.locale,
})

const mapDispatchToProps = {
  // facebookLogin,
  // googleLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
