import { connect } from 'react-redux'
import NewsDetail from '../components/NewsDetail'
import { showDetailNews } from '../../modules/News'

export const mapStateToProps = (store) => ({
  detailNews: store.news.detailNews,
})

export const mapDispatchToProps = {
  showDetailNews,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail)
