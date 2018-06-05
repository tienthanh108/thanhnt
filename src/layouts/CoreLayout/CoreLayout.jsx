import React from 'react'
import 'styles/core.scss'
import HeaderLanding from '../../components/HeaderLanding/HeaderLanding'
// import HeaderHomeBtn from '../../components/HeaderHomeBtn/HeaderHomeBtn'
import Slider from '../../components/Slider/Slider'
import Footer from '../../components/Footer/Footer'
import classes from './CoreLayout.scss'

class CoreLayout extends React.Component {

  constructor() {
    super()
    this.notificationTimeout = undefined
    this.autoDismissMilliSecs = 6000
  }
  componentWillMount() {
    this.props.getBanner()
    this.props.getAbout()
    this.props.getInitNews()
    this.props.getInitProducts()
    this.props.getInitProjects()
  }
  componentWillUnmount() {
    clearTimeout(this.notificationTimeout)
  }

  render() {
    const vm = this
    if (this.props.notification.message.length) {
      clearTimeout(this.notificationTimeout)
      this.notificationTimeout = setTimeout(() => vm.props.clearNotification(), this.autoDismissMilliSecs)
    }

    return (
      <div>
        {this.props.loading && <div className={classes.loaderContainer}>
          <div className={classes.loader}>Loading...</div>
        </div>}
        <HeaderLanding />
        <Slider banners={this.props.banners} />
        <div className={classes.maxWidth}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
  notification: React.PropTypes.object,
  loading: React.PropTypes.bool.isRequired,
  // clearNotification: React.PropTypes.func.isRequired,
}

export default CoreLayout
