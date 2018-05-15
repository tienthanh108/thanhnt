import React from 'react'
import Slider from 'react-slick'
import slider1 from 'assets/next-btn.png'
import slider2 from 'assets/prev-btn.png'
import classes from './Slider.scss'

function SampleNextArrow(props) {
  return (
    <div {...props}>
      <img alt='next' src={slider1} />
    </div>
  )
}

function SamplePrevArrow(props) {
  return (
    <div {...props}>
      <img alt='prev' src={slider2} />
    </div>
  )
}
const MainSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
