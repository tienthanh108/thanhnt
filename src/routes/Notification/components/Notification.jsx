import React from 'react'
import HeaderDashboard from 'components/HeaderDashboard'
import classNames from 'classnames'
import classes from './Notification.scss'


export class Notification extends React.Component {

  constructor() {
    super()
    this.state = {
      isShowDonut: true,
      style: {},
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  changeShowMap = () => {
    this.setState({
      isShowDonut: !this.state.isShowDonut,
    })
  }


  render() {
    const fullName = sessionStorage.getItem('fullName')
    return (
      <div className={classNames('bg-building', classes.bgDashBoard)}>
        <HeaderDashboard notify='true' fullName={fullName} />
        <div className={classes.notifyText}>
          Hiện nay, mục này đang trong quá trình phát triển.
          <br />
          Chúng tôi sẽ cố gắng hoàn thành sớm nhất.
        </div>
      </div>
    )
  }
}

Notification.propTypes = {
}

export default Notification
