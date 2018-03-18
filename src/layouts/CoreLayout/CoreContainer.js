import { connect } from 'react-redux'
import { clearNotification } from 'store/modules/notification'
import CoreLayout from './CoreLayout'

const mapStateToProps = (state) => ({
  notification: state.notification.message,
  type: state.notification.type,
  loading: state.notification.loading,
})

const mapDispatchToProps = {
  clearNotification,
}

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
