import { connect } from 'react-redux'
import ProductsList from '../components/ProductsList'
import { initProduct, getLsProductTypeByGroupId, getLsProductByTypeId,
  getListProductOfProductType, getDetailProductById }
  from '../../modules/Products'

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
  getListProductOfProductType,
  getDetailProductById,
  getLsProductByTypeId,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
