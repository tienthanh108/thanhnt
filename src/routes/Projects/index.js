import ProjectList from './ProjectList'
import ProjectDetail from './ProjectDetail'

export default {
  path: 'projects',
  childRoutes: [
    ProjectDetail,
    ProjectList,
  ],
}
