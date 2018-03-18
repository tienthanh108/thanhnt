import React from 'react'
import about from 'assets/about2.jpg'
import classes from './Pursuit.scss'
import LeftMenu from '../../components/LeftMenu'

class StepOne extends React.Component {
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
        <LeftMenu />
        <div className={classes.content}>
          <div className={classes.title}>
            ABOUT
          </div>
          <div className={classes.innerContent}>
            <img src={about} alt='' />
              Guangzhou Rui Gao Electronics Co., Ltd. is located in Panyu Tian energy-saving technology park
              , elegant office environment and convenient transportation for domestic and foreign partners
              to provide smooth business services and platforms. The company has a modern standard large-scale
              manufacturing base and efficient international production of automated equipment;
              in the field of modern electro-acoustic
              innovation constantly pursuing the sound of perfection, the field of
              electro-acoustic technology ideal, to revitalize the
              national audio industry as its mission to strength casting DMX International brand.
              <br />
              Since its establishment in 1992, the company has
              always adopted a rigorous approach to look forward to a high degree
              of thinking to explore the world-leading audio electronic technology,
              its DMX brand positioning clear high-end, high-quality
              product line for a long time with excellent products Quality
              and excellent after-sales service has won the unanimous praise
              of customers at home and abroad, established a good reputation.
          </div>
        </div>
      </div>
    )
  }
}

export default StepOne
