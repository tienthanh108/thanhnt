import React from 'react'
// import Header from 'components/Header'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router'
import classes from './PageNotFound.scss'
import FailureImg from './assets/failure.svg'

const PageNotFound = () => (
  <div>
    <div className={classes.pageNotFoundContent}>
      <img src={FailureImg} alt='404' />
      <div className={classes.message}><FormattedMessage id='error.pageNotFoundMessage' /></div>
      <div className={classes.solution}><Link to='/'><FormattedMessage id='error.pageNotFoundSolution' /></Link></div>
    </div>
  </div>
)

PageNotFound.propTypes = {

}

export default PageNotFound
