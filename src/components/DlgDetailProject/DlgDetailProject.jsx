import React from 'react'
import ReactHTMLConverter from 'react-html-converter'
import classNames from 'classnames'
import classes from './DlgDetailProject.scss'

const DlgDetailProject = (props) => {
  const { id, project } = props
  return (
    <div id={id} className='modal fade projectDetailModal' role='dialog'>
      <div className={classNames('modal-dialog', classes.modalDialog)}>
        <div className='modal-content'>
          <div className='modal-header'>
            <button type='button' className='close' data-dismiss='modal'>&times;</button>
            <h4 className='modal-title'>{project.name}</h4>
          </div>
          <div className='modal-body'>
            <div className={classes.container}>
              <span className={classes.contentConfirm}>
                {new ReactHTMLConverter().convert(project.description)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

DlgDetailProject.propTypes = {
}

export default DlgDetailProject
