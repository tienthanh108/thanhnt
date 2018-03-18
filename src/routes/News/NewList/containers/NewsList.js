import { connect } from 'react-redux'
import NewsList from '../components/NewsList'
import { getListNews } from '../../modules/News'

export const mapStateToProps = (store) => ({
  newsList: store.news.newsList,
})

export const mapDispatchToProps = {
  getListNews,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)
