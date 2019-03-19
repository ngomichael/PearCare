import React from 'react'
import { Link } from '@reach/router'
import styles from './home.module.css'
import SignedOutHeader from './signed-out-header'
import pears from '../images/pairOfPears.png'
import { Button, TYPES, SIZES } from '../common/button'

const Home = props => {
  return (
    <div className={styles.container}>
      <SignedOutHeader />
      <div className={styles.introContainer}>
        <h1 className={styles.tagline}>
          Better patient-provider pairs, better mental healthcare
        </h1>
        <p className={styles.supplementaryText}>
          Searching for mental health services and finding a provider that fits
          any given patient’s needs can be an overwhelming and time-consuming
          process. PearCare's matching algorithm intends to personalize every
          individual’s experience when searching for a provider.
        </p>
        <Link to="getStarted">
          <Button
            type="button"
            buttonType={TYPES.PRIMARY}
            buttonSize={SIZES.MEDIUM}
          >
            Find a Provider
          </Button>
        </Link>
      </div>
      {/* <Link to="/">Learn more about how it works</Link> */}
      {/* This button should be inside of a Link tag */}
      <div className={styles.pearImagesContainer}>
        <img
          src={pears}
          className={`${styles.pearImage} ${styles.pearImageOne}`}
        />
        <img src={pears} className={styles.pearImage} />
        <img
          src={pears}
          className={`${styles.pearImage} ${styles.pearImageThree}`}
        />
      </div>
    </div>
  )
}

export default Home
