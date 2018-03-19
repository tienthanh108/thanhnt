import React from 'react'
import Slider from 'react-slick'
// import slider1 from 'assets/slide1.jpg'
// import slider2 from 'assets/slide2.jpg'
// import slider3 from 'assets/slide3.jpg'
import classes from './Slider.scss'

const MainSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className={classes.container}>
      {
        props.banners && props.banners.length > 0 &&

        <Slider {...settings}>
          {
              props.banners.map((item, index) =>
                <div data-index={index} key={index}>
                  <img src={item.parValue} alt={item.description} />
                </div>,
              )
            }
        </Slider>
    }
    </div>
  )
}
export default MainSlider
