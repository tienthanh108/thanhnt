import ProductDetail from './ProductDetail'
import ProductsList from './ProductList'

export default {
  path: 'products',
  childRoutes: [
    ProductDetail,
    ProductsList,
  ],
}
