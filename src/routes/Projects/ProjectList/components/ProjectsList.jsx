import React from 'react'
import ChangePage from '../../../../components/ChangePage/ChangePage'
import classes from './ProjectsList.scss'
import ProjectElement from './ProjectElement'

class ProjectsList extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentWillMount() {
    const projectId = sessionStorage.getItem('projectId')
    if (projectId) {
      this.props.getDetailProjectById(projectId)
    } else {
      this.props.initProject()
    }
  }

  componentDidMount() {
    document.getElementById('pageNumberProject').value = 1
  }

  topMenuClick = (id) => {
    this.props.getLsProjectByGroupId(id)
  }

  render() {
    const maxPage = sessionStorage.getItem('totalCount')
      ? Math.floor(sessionStorage.getItem('totalCount') / 6) + 1
      : 0
    const page = document.getElementById('pageNumberProject')
    const minus5 = page ?
      Math.max(parseInt(page.value, 10) - 4, 0) : 0
    const minus1 = page ?
      Math.max(parseInt(page.value, 10) - 2, 0) : 0
    const add1 = page ?
      Math.min(parseInt(page.value, 10), maxPage) : 0
    const add5 = page ?
      Math.min(parseInt(page.value, 10) + 4, maxPage) : 0
    const goto = page ?
      Math.min(
        parseInt(page.value, 10),
        4) : 0
    const { projectGroups, projects, viewDetail } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.topMenu}>
          {
            projectGroups && projectGroups.map((item, index) =>
              <button key={index}
                onClick={() => this.topMenuClick(item.id)}
                className={item.active ? classes.active : ''}
              >
                {item.name}
              </button>,
            )
          }
        </div>
        <div className={classes.content}>
          {
            !viewDetail && projects && projects.map((element, index) =>
              <ProjectElement key={index} element={element}
                selectProject={this.props.getDetailProjectById}
              />,
            )
          }
          {
            !viewDetail &&
            <ChangePage
              idInput='pageNumberProject'
              function={this.props.getLsProjectByGroupId}
              minus5={minus5}
              minus1={minus1}
              add1={add1}
              add5={add5}
              goto={goto}
              maxPage={6}
            />
          }
        </div>
      </div>
    )
  }
}

export default ProjectsList
