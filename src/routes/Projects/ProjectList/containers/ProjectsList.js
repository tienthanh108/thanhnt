import { connect } from 'react-redux'
import ProjectsList from '../components/ProjectsList'
import { getLsProjectByGroupId, getDetailProjectById, initProject } from '../../modules/Projects'

export const mapStateToProps = (store) => ({
  projectGroups: store.project.projectGroups,
  projects: store.project.projects,
  project: store.project.project,
  viewDetail: store.project.viewDetail,
})

export const mapDispatchToProps = {
  getLsProjectByGroupId,
  getDetailProjectById,
  initProject,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList)
