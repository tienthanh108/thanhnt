import { connect } from 'react-redux'
import Service from '../components/Service'
import { initProduct, getLsProductTypeByGroupId, getLsProductByTypeId, getDetailProductById } from '../modules/Service'

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

export default connect(mapStateToProps, mapDispatchToProps)(Service)
