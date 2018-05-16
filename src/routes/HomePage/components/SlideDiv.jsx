import React from 'react'
import Slider from 'react-slick'
// import slider1 from 'assets/slide1.jpg'
// import slider2 from 'assets/slide2.jpg'
// import slider3 from 'assets/slide3.jpg'
import slider1 from 'assets/next-btn.png'
import slider2 from 'assets/prev-btn.png'
import classes from './SlideDiv.scss'

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
const SliderDiv = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }],
  }

  return (
    <div className={classes.container}>
      {
        props.elements && props.elements.length > 0 &&

        <Slider {...settings} id='sliderProduct'>
          {
              props.elements.map((item, index) =>
                <div data-index={index} key={index}>
                  <img src={item.imagePath} className={classes.img} alt={item.description} />
                  <div className={classes.title} onClick={() => props.navigateProject(item.id)}>{item.name}</div>
                </div>,
              )
            }
        </Slider>
    }
    </div>
  )
}
export default SliderDiv
