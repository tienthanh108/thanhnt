import React from 'react'
import speaker from 'assets/news1.jpg'
import ChangePage from '../../../components/ChangePage/ChangePage'
import classes from './News.scss'
import NewsElement from './NewsElement'

const news = [
  {
    src: speaker,
    title: 'Speaker 1',
    date: '05/12/2018',
    previewContent: 'asdas dashd hasd hasidhas hd iasdias digasidgasd ' +
    'gasildg asldg ailsdgas igd ilasgd ilasgdi asgdi agsdi gasdig',
  },
  {
    src: speaker,
    title: 'Speaker 2',
    date: '05/12/2018',
    previewContent: 'asdas dashd hasd hasidhas hd iasdias digasidgasd ' +
    'gasildg asldg ailsdgas igd ilasgd ilasgdi asgdi agsdi gasdig',
  },
  {
    src: speaker,
    title: 'Speaker 3',
    date: '05/12/2018',
    previewContent: 'asdas dashd hasd hasidhas hd iasdias digasidgasd ' +
    'gasildg asldg ailsdgas igd ilasgd ilasgdi asgdi agsdi gasdig',
  },
  {
    src: speaker,
    title: 'Speaker 4',
    date: '05/12/2018',
    previewContent: 'asdas dashd hasd hasidhas hd iasdias digasidgasd ' +
    'gasildg asldg ailsdgas igd ilasgd ilasgdi asgdi agsdi gasdig',
  },
  {
    src: speaker,
    title: 'Speaker 5',
    date: '05/12/2018',
    previewContent: 'asdas dashd hasd hasidhas hd iasdias digasidgasd ' +
    'gasildg asldg ailsdgas igd ilasgd ilasgdi asgdi agsdi gasdig',
  },
  {
    src: speaker,
    title: 'Speaker 6',
    date: '05/12/2018',
    previewContent: 'asdas dashd hasd hasidhas hd iasdias digasidgasd ' +
    'gasildg asldg ailsdgas igd ilasgd ilasgdi asgdi agsdi gasdig',
  },
  {
    src: speaker,
    title: 'Speaker 7',
    date: '05/12/2018',
    previewContent: 'asdas dashd hasd hasidhas hd iasdias digasidgasd ' +
    'gasildg asldg ailsdgas igd ilasgd ilasgdi asgdi agsdi gasdig',
  },
  {
    src: speaker,
    title: 'Speaker 8',
    date: '05/12/2018',
    previewContent: 'asdas dashd hasd hasidhas hd iasdias digasidgasd ' +
    'gasildg asldg ailsdgas igd ilasgd ilasgdi asgdi agsdi gasdig',
  },
  {
    src: speaker,
    title: 'Speaker 9',
    date: '05/12/2018',
    previewContent: 'asdas dashd hasd hasidhas hd iasdias digasidgasd ' +
    'gasildg asldg ailsdgas igd ilasgd ilasgdi asgdi agsdi gasdig',
  },
]
class News extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentWillMount() {
  }


  render() {
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
            news.map((element, index) =>
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

export default News
