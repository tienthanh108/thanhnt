import { connect } from 'react-redux'
import { clearNotification } from 'store/modules/notification'
import { getBanner, getAbout, getInitNews, getInitProducts, getInitProjects } from './CoreModules'
import CoreLayout from './CoreLayout'

const mapStateToProps = (state) => ({
  notification: state.notification.message,
  type: state.notification.type,
  loading: state.notification.loading,
  banners: state.core.banners,
})

const mapDispatchToProps = {
  clearNotification,
  getBanner,
  getAbout,
  getInitNews,
  getInitProducts,
  getInitProjects,
}

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
