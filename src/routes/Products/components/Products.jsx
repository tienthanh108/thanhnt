import React from 'react'
import ChangePage from '../../../components/ChangePage/ChangePage'
import classes from './Products.scss'
import LeftMenu from './LeftMenu'
import ProductElement from './ProductElement'
import ProductDetail from './ProductDetail'


class Products extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentWillMount() {
    const productId = sessionStorage.getItem('productId')
    if (productId) {
      this.props.getDetailProductById(productId)
    } else {
      this.props.initProduct()
    }
  }

  render() {
    const minus5 = document.getElementById('pageNumberDream') ?
      Math.max(parseInt(document.getElementById('pageNumberDream').value, 10) - 5, 1) : 1
    const minus1 = document.getElementById('pageNumberDream') ?
      Math.max(parseInt(document.getElementById('pageNumberDream').value, 10) - 1, 1) : 1
    const add1 = document.getElementById('pageNumberDream') ?
      Math.min(parseInt(document.getElementById('pageNumberDream').value, 10) + 1, 4) : 1
    const add5 = document.getElementById('pageNumberDream') ?
      Math.min(parseInt(document.getElementById('pageNumberDream').value, 10) + 5, 4) : 1
    const goto = document.getElementById('pageNumberDream') ?
    Math.min(
      parseInt(document.getElementById('pageNumberDream').value, 10),
      4) : 1
    const { productTypeGroups, productTypes, products, product, viewDetail } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.topMenu}>
          {
            productTypeGroups && productTypeGroups.map((item, index) =>
              <button key={index}
                onClick={() => this.props.getLsProductTypeByGroupId(item.id)}
                className={item.active ? classes.active : ''}
              >
                {item.name}
              </button>,
            )
          }
        </div>
        <div className={classes.contentInside}>
          <LeftMenu elements={productTypes} selectCategory={this.props.getLsProductByTypeId} />
          <div className={classes.product}>
            {
              viewDetail && product &&
              <ProductDetail element={product} />
            }
            {
              !viewDetail && products && products.map((element, index) =>
                <ProductElement key={index} element={element}
                  selectProduct={this.props.getDetailProductById}
                />,
              )
            }
            {
              !viewDetail &&
              <ChangePage
                function={this.props.getDreamList}
                minus5={minus5}
                minus1={minus1}
                add1={add1}
                add5={add5}
                goto={goto}
                maxPage={6}
              />
            }
          </div>
        </div>
      </div>
    )
  }
}

Products.propTypes = {
}

export default Products
