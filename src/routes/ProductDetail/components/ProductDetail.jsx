import React from 'react'
import speaker from 'assets/speaker.jpg'
import classes from './ProductDetail.scss'
import LeftMenu from '../../Products/components/LeftMenu'


const elementsLeft = [
  {
    title: 'FX Seri Speaker',
  },
  {
    title: 'FX Seri Speaker 1',
  },
  {
    title: 'FX Seri Speaker 2',
  },
  {
    title: 'FX Seri Speaker 3',
  },
  {
    title: 'FX Seri Speaker 4',
  },
  {
    title: 'FX Seri Speaker 5',
  },
]

class ProductDetail extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentWillMount() {
  }


  render() {
    return (
      <div className={classes.container}>
        <div className={classes.topMenu}>
          <button>Speaker</button>
          <button>Electronics Product</button>
          <button>Audio System</button>
          <button>Speaker 2</button>
          <button>Speaker 3</button>
          <button>Speaker 4</button>
        </div>
        <div className={classes.contentInside}>
          <LeftMenu elements={elementsLeft} />
          <div className={classes.productDetail}>
            <div>
              <img src={speaker} alt='' />
              asdasld asdhasd iashdi ahsdi ahsdia sidha sdh asid agdais gdiasgd isagd isagd iagsd
              asdasdasdasd
              asdasd asdasdasdasdas
              as dasd asd
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ProductDetail
