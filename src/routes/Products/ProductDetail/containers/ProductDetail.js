import { connect } from 'react-redux'
import ProductDetail from '../components/ProductDetail'
import { getLsProductTypeByGroupId, getLsProductByTypeId, getDetailProductById } from '../../modules/Products'

export const mapStateToProps = (store) => ({
  productTypeGroups: store.products.productTypeGroups,
  productTypes: store.products.productTypes,
  product: store.products.product,
  viewDetail: store.products.viewDetail,
})

export const mapDispatchToProps = {
  getLsProductTypeByGroupId,
  getLsProductByTypeId,
  getDetailProductById,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
