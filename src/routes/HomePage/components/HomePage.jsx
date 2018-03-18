
import React from 'react'
// import { navigateTo } from 'utils/routing'
import about from 'assets/about1.jpg'
import newsImg from 'assets/news.jpg'
import productImg from 'assets/product.jpg'
import Slider from 'react-slick'
import slider from 'assets/slide.jpg'

import classes from './HomePage.scss'
// import './HeaderLanding/HeaderLanding.scss'

const news = [
  {
    title: '☆ Tencent Penguin run the third station Chongqing Park Expo',
    id: '1',
  },
  {
    title: '☆ Tencent Penguin run the third station Chongqing Park Expo',
    id: '2',
  },
  {
    title: '☆ Tencent Penguin run the third station Chongqing Park Expo',
    id: '3',
  },
  {
    title: '☆ Tencent Penguin run the third station Chongqing Park Expo',
    id: '4',
  },
  {
    title: '☆ Tencent Penguin run the third station Chongqing Park Expo',
    id: '5',
  },
  {
    title: '☆ Tencent Penguin run the third station Chongqing Park Expo',
    id: '6',
  },
]
const products = [
  {
    img: productImg,
    id: 1,
  },
  {
    img: productImg,
    id: 2,
  },
  {
    img: productImg,
    id: 3,
  },
  {
    img: productImg,
    id: 4,
  },
  {
    img: productImg,
    id: 5,
  },
  {
    img: productImg,
    id: 6,
  },
]

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
}

class HomePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  render() {
    return (
      <div className={classes.homePage}>
        <div className={classes.content}>
          <div className={classes.middleContent}>
            <div className={classes.aboutUs}>
              <button className={classes.titleButton}>About Us</button>
              <img src={about} alt='' />
              about usGuangzhou Rui Gao Electronics Co., Ltd. is located in Panyu Tian
              energy-saving technology park, elegant office environment and convenient
              transportation for domestic and foreign partners to provide smooth business
              services and platforms. The company has modern large-scale standard manufacturing
              base and efficient international production of automated equipment; in the field o
            </div>
            <div className={classes.news}>
              <button className={classes.titleButton}>News Center</button>
              <img src={newsImg} alt='' />
              <div className={classes.newsContent}>
                {
                  news.map((newsElement) =>
                    <li>
                      {newsElement.title}
                    </li>,
                  )
                }
              </div>
            </div>
            <div className={classes.products}>
              <button className={classes.titleButton}>Products Center</button>
              <div className={classes.productsContent}>
                {
                    products.map((product) =>
                      <div>
                        <img src={product.img} alt='' />
                      </div>,
                    )
                  }
              </div>
            </div>
          </div>
          <div className={classes.slideContent}>
            <button className={classes.titleButton}>Products Center</button>
            <Slider {...settings}>
              <div className={classes.slide}>
                <img src={slider} alt='' />
                <a>Du an 1</a>
              </div>
              <div className={classes.slide}>
                <img src={slider} alt='' />
                <a>Du an 1</a>
              </div>
              <div className={classes.slide}>
                <img src={slider} alt='' />
                <a>Du an 1</a>
              </div>
              <div className={classes.slide}>
                <img src={slider} alt='' />
                <a>Du an 1</a>
              </div>
              <div className={classes.slide}>
                <img src={slider} alt='' />
                <a>Du an 1</a>
              </div>
              <div className={classes.slide}>
                <img src={slider} alt='' />
                <a>Du an 1</a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    )
  }
}

// HomePage.propTypes = {
//   googleLogin: React.PropTypes.func.isRequired,
//   facebookLogin: React.PropTypes.func.isRequired,
// }

export default HomePage
