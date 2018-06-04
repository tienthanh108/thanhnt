import { connect } from 'react-redux'
import Service from '../components/Service'
import { initService, onChangeTypeService, onChangeGroupDownloadById } from '../modules/Service'

export const mapStateToProps = (store) => ({
  lsServices: store.service.lsServices,
  content: store.service.content,
  typeService: store.service.typeService,
  groupDownloads: store.service.groupDownloads,
  downloads: store.service.downloads,
})

export const mapDispatchToProps = {
  initService,
  onChangeTypeService,
  onChangeGroupDownloadById,
}

export default connect(mapStateToProps, mapDispatchToProps)(Service)
