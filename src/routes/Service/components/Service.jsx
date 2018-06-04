import React from 'react'
import ReactHTMLConverter from 'react-html-converter'
import classes from './Service.scss'
import LeftMenu from './LeftMenu'
import DownloadDetail from './DownloadDetail'

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
    const { lsServices, content, typeService, groupDownloads, downloads, onChangeTypeService,
      onChangeGroupDownloadById } = this.props
    const converter = new ReactHTMLConverter()
    return (
      <div className={classes.container}>
        <div className={classes.topMenu}>
          {
            typeService && typeService === 'DOWNLOAD' && groupDownloads && groupDownloads.map((item, index) =>
              <button key={index}
                onClick={() => onChangeGroupDownloadById(item.id)}
                className={item.active ? classes.active : ''}
              >
                {item.name}
              </button>,
            )
          }
        </div>
        <div className={classes.contentInside}>
          <LeftMenu elements={lsServices} selectCategory={onChangeTypeService} />
          <div className={classes.product}>
            {
              typeService && typeService === 'DOWNLOAD' &&
              <DownloadDetail downloads={downloads} />
            }
            {
              typeService && typeService !== 'DOWNLOAD' && content &&
              <div>
                {converter.convert(content.description)}
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
