import React from 'react'
import ReactHTMLConverter from 'react-html-converter'
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
    const htmlConvert = new ReactHTMLConverter()
    return (
      <div className={classes.container}>
        <LeftMenu elements={lsProfiles} selectCategory={this.props.getProfilesDetail} />
        <div className={classes.content}>
          <div className={classes.title}>
            ABOUT
          </div>
          <div className={classes.innerContent}>
            <img src={profile.imagePath} alt='' />
            {htmlConvert.convert(profile.content)}
          </div>
        </div>
      </div>
    )
  }
}

export default Introduction
