import React from 'react'
import classes from './Introduction.scss'
import LeftMenu from './LeftMenu'

class Introduction extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentWillMount() {
    this.props.initProfiles()
  }

  render() {
    const { lsProfiles, profile } = this.props
    return (
      <div className={classes.container}>
        <LeftMenu element={lsProfiles} selectCategory={this.props.getProfilesDetail} />
        <div className={classes.content}>
          <div className={classes.title}>
            ABOUT
          </div>
          <div className={classes.innerContent}>
            <img src={profile.imagePath} alt='' />
            {profile.content}
          </div>
        </div>
      </div>
    )
  }
}

export default Introduction
