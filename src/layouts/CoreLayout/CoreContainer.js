import { connect } from 'react-redux'
import { clearNotification } from 'store/modules/notification'
import { getHomeParams } from './CoreModules'
import CoreLayout from './CoreLayout'

const mapStateToProps = (state) => ({
  notification: state.notification.message,
  type: state.notification.type,
  loading: state.notification.loading,
  banners: state.core.banners,
})

const mapDispatchToProps = {
  clearNotification,
  getHomeParams,
}

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
