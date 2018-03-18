import { connect } from 'react-redux'
import Products from '../components/Products'
import { initProduct, getLsProductTypeByGroupId, getLsProductByTypeId, getDetailProductById } from '../modules/Products'

export const mapStateToProps = (store) => ({
  productTypeGroups: store.products.productTypeGroups,
  productTypes: store.products.productTypes,
  products: store.products.products,
  product: store.products.product,
  viewDetail: store.products.viewDetail,
})

export const mapDispatchToProps = {
  initProduct,
  getLsProductTypeByGroupId,
  getLsProductByTypeId,
  getDetailProductById,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
