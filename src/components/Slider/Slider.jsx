import React from 'react'
import Slider from 'react-slick'
import slider1 from 'assets/slide1.jpg'
import slider2 from 'assets/slide2.jpg'
import slider3 from 'assets/slide3.jpg'
import classes from './Slider.scss'

const MainSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className={classes.container}>
      <Slider {...settings}>
        <div>
          <img src={slider1} alt='' />
        </div>
        <div>
          <img src={slider2} alt='' />
        </div>
        <div>
          <img src={slider3} alt='' />
        </div>

      </Slider>
    </div>
  )
}
export default MainSlider
