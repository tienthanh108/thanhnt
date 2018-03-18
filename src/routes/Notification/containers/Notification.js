import { connect } from 'react-redux'
// import { register } from '../modules/Dashboard'
import Notification from '../components/Notification'

export const mapStateToProps = () => ({
  // locale: store.locale,
})

const mapDispatchToProps = {
  // register,
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
