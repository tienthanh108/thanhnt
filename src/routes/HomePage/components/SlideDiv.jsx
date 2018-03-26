import React from 'react'
import Slider from 'react-slick'
// import slider1 from 'assets/slide1.jpg'
// import slider2 from 'assets/slide2.jpg'
// import slider3 from 'assets/slide3.jpg'
import classes from './SlideDiv.scss'

const SliderDiv = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <div className={classes.container}>
      {
        props.elements && props.elements.length > 0 &&

        <Slider {...settings}>
          {
              props.elements.map((item, index) =>
                <div data-index={index} key={index}>
                  <img src={item.imagePath} alt={item.description} />
                  <div className={classes.title}>{item.code}</div>
                </div>,
              )
            }
        </Slider>
    }
    </div>
  )
}
export default SliderDiv
