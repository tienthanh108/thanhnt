import React from 'react'
import ReactHTMLConverter from 'react-html-converter'
import classes from './ProjectsDetail.scss'
import { navigateTo } from '../../../../utils/routing'

class ProjectsDetail extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentWillMount() {
    if (!this.props.project) {
      navigateTo('/projects/list')
    }
  }

  topMenuClick = (id) => {
    this.props.getLsProjectByGroupId(id)
    navigateTo('/projects/list')
  }


  render() {
    const { projectGroups, project, viewDetail } = this.props
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
            viewDetail && project &&
            <div className={classes.productDetail}>
              <img src={project.imagePath} alt={project.name} />
              {new ReactHTMLConverter().convert(project.description)}
            </div>
          }
        </div>
      </div>
    )
  }
}

export default ProjectsDetail
