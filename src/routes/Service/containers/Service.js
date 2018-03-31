import { connect } from 'react-redux'
import Service from '../components/Service'
import { initService, getServiceByParName } from '../modules/Service'

export const mapStateToProps = (store) => ({
  lsServices: store.service.lsServices,
  content: store.service.content,
})

export const mapDispatchToProps = {
  initService,
  getServiceByParName,
}

export default connect(mapStateToProps, mapDispatchToProps)(Service)
