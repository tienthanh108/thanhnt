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

  topMenuClick = (id) => {
    this.props.getLsProjectByGroupId(id)
  }

  render() {
    const minus5 = document.getElementById('pageNumberDream') ?
      Math.max(parseInt(document.getElementById('pageNumberDream').value, 10) - 5, 1) : 1
    const minus1 = document.getElementById('pageNumberDream') ?
      Math.max(parseInt(document.getElementById('pageNumberDream').value, 10) - 1, 1) : 1
    const add1 = document.getElementById('pageNumberDream') ?
      Math.min(parseInt(document.getElementById('pageNumberDream').value, 10) + 1, 4) : 1
    const add5 = document.getElementById('pageNumberDream') ?
      Math.min(parseInt(document.getElementById('pageNumberDream').value, 10) + 5, 4) : 1
    const goto = document.getElementById('pageNumberDream') ?
    Math.min(
      parseInt(document.getElementById('pageNumberDream').value, 10),
      4) : 1
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
              function={this.props.getDreamList}
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
