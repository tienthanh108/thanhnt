import React from 'react'
// import speaker from 'assets/news1.jpg'
import ChangePage from '../../../../components/ChangePage/ChangePage'
import classes from './NewsList.scss'
import NewsElement from './NewsElement'

class NewList extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentWillMount() {
    this.props.getListNews()
  }
  render() {
    const { newsList } = this.props
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
    return (
      <div className={classes.container}>
        {
          newsList && newsList.map((element, index) =>
            <NewsElement key={index} element={element} />,
          )
        }
        <ChangePage
          function={this.props.getDreamList}
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
