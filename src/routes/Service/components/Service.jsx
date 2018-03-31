import React from 'react'
import ReactHTMLConverter from 'react-html-converter'
import classes from './Service.scss'
import LeftMenu from './LeftMenu'

class Service extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentWillMount() {
    this.props.initService()
  }

  render() {
    const { lsServices, content } = this.props
    const converter = new ReactHTMLConverter()
    return (
      <div className={classes.container}>
        <div className={classes.contentInside}>
          <LeftMenu elements={lsServices} selectCategory={this.props.getServiceByParName} />
          <div className={classes.product}>
            {
              content &&
              <div>
                {converter.convert(content.parValue)}
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

Service.propTypes = {
}

export default Service
