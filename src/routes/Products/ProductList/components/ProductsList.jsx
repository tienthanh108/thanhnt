import React from 'react'
import ChangePage from '../../../../components/ChangePage/ChangePage'
import classes from './ProductsList.scss'
import LeftMenu from './LeftMenu'
import ProductElement from './ProductElement'


class ProductsList extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentWillMount() {
    if (!this.props.productTypeGroups) {
      this.props.initProduct()
    }
  }
  componentDidMount() {
    document.getElementById('pageNumberProduct').value = 1
  }

  render() {
    const maxPage = sessionStorage.getItem('totalCount')
    ? Math.floor(sessionStorage.getItem('totalCount') / 6) + 1
    : 0
    const page = document.getElementById('pageNumberProduct')
    const minus5 = page ?
      Math.max(parseInt(page.value, 10) - 4, 0) : 0
    const minus1 = page ?
      Math.max(parseInt(page.value, 10) - 2, 0) : 0
    const add1 = page ?
      Math.min(parseInt(page.value, 10), maxPage) : 0
    const add5 = page ?
      Math.min(parseInt(page.value, 10) + 4, maxPage) : 0
    const goto = page ?
    Math.min(
      parseInt(page.value, 10),
      4) : 0

    const { productTypeGroups, productTypes, products, viewDetail } = this.props
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
              !viewDetail && products && products.map((element, index) =>
                <ProductElement key={index} element={element}
                  selectProduct={this.props.getDetailProductById}
                />,
              )
            }
            {
              !viewDetail &&
              <ChangePage
                idInput='pageNumberProduct'
                function={this.props.getLsProductByTypeId}
                minus5={minus5}
                minus1={minus1}
                add1={add1}
                add5={add5}
                goto={goto}
                maxPage={maxPage}
              />
            }
          </div>
        </div>
      </div>
    )
  }
}

ProductsList.propTypes = {
}

export default ProductsList
