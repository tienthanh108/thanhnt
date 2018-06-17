import React from 'react'
import classes from './NewsList.scss'
import NewsElement from './NewsElement'
import ChangePageNews from '../../../../components/ChangePage/ChangePageNews'

class NewList extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  componentWillMount() {
    this.props.getListNews()
  }

  componentDidMount() {
    if (document.getElementById('pageNumberNews')) {
      document.getElementById('pageNumberNews').value = 1
    }
  }

  render() {
    const maxPage = sessionStorage.getItem('totalCount')
      ? Math.floor(sessionStorage.getItem('totalCount') / 6) + 1
      : 0
    const page = document.getElementById('pageNumberNews')
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
    return (
      <div className={classes.container}>
        {
          this.props.newsList && this.props.newsList.map((element, index) =>
            <NewsElement key={index} element={element} />,
          )
        }
        <ChangePageNews
          idInput='pageNumberNews'
          function={this.props.getListNews}
          minus5={minus5}
          minus1={minus1}
          add1={add1}
          add5={add5}
          goto={goto}
          maxPage={4}
        />
      </div>
    )
  }
}

export default NewList
