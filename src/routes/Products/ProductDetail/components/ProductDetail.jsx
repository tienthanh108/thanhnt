import React from 'react'
import ReactHTMLConverter from 'react-html-converter'
import classes from './ProductsDetail.scss'
import LeftMenu from '../../ProductList/components/LeftMenu'
import { navigateTo } from '../../../../utils/routing'


class ProductDetail extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentWillMount() {

  }

  topMenuClick = (id) => {
    this.props.getLsProductTypeByGroupId(id)
    navigateTo('/products/list')
  }

  leftMenuClick = () => {
    this.props.getLsProductByTypeId()
    navigateTo('/products/list')
  }

  render() {
    const { productTypeGroups, productTypes, product, viewDetail } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.topMenu}>
          {
            productTypeGroups && productTypeGroups.map((item, index) =>
              <button key={index}
                onClick={() => this.topMenuClick(item.id)}
                className={item.active ? classes.active : ''}
              >
                {item.name}
              </button>,
            )
          }
        </div>
        <div className={classes.contentInside}>
          <LeftMenu elements={productTypes} selectCategory={this.leftMenuClick} />
          {
            viewDetail && product &&
            <div className={classes.productDetail}>
              {new ReactHTMLConverter().convert(product.description)}
            </div>
          }
        </div>
      </div>
    )
  }
}

ProductDetail.propTypes = {
}

export default ProductDetail
