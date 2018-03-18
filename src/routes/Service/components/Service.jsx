import React from 'react'
import classes from './Service.scss'
import LeftMenu from './LeftMenu'
import ProjectElement from './ServiceElement'
import ProjectDetail from './ServiceDetail'


class Service extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentWillMount() {
  }

  render() {
    const { productTypes, products, product, viewDetail } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.contentInside}>
          <LeftMenu elements={productTypes} selectCategory={this.props.getLsProductByTypeId} />
          <div className={classes.product}>
            {
              viewDetail && product &&
              <ProjectDetail element={product} />
            }

            {
              !viewDetail && products && products.map((element, index) =>
                <ProjectElement key={index} element={element}
                  selectProduct={this.props.getDetailProductById}
                />,
              )
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
