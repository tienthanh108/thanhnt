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
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }],
  }

  return (
    <div className={classes.container} id='sliderProduct'>
      {
        props.elements && props.elements.length > 0 &&
        <Slider {...settings}>
          {
            props.elements.map((item, index) =>
              <div data-index={index} key={index} onClick={() => props.navigateProject(item.id)}
                className={classes.warper}
              >
                <img src={item.imagePath} className={classes.img} alt={item.description} />
                <div className={classes.title}>{item.name}</div>
              </div>,
            )
          }
        </Slider>
    }
    </div>
  )
}
export default SliderDiv
