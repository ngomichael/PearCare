import React, { useState } from 'react'
import { Link, Redirect } from '@reach/router'
import firebase from '../firebase/firebase'
import styles from './sign-in.module.css'
import { Button, TYPES, SIZES } from '../common/button'
import { InputField } from '../common/input-field'
import { HomeHeader } from '../common/home-header'
import { UndrawLogin } from 'react-undraw'
import pears from '../images/pairOfPears.png'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignedIn, setIsSignedIn] = useState(false)

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  async function handleSignIn() {
    try {
      await firebase.signIn(email, password)
      setIsSignedIn(true)
      return <Redirect noThrow to="/getStarted" />
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={styles.container}>
      <HomeHeader />
      <div className={styles.maxWidthContainer}>
        <div className={styles.imageSignInContainer}>
          <div className={styles.pearImagesContainer}>
            <img src={pears} className={styles.pearImage} />
            <img src={pears} className={styles.pearImage} />
          </div>
          <div className={styles.signInInfoContainer}>
            <p className={styles.title}>Welcome back</p>
            <p className={styles.description}>
              Catasstrophe headbutt owner's knee, so meow to be let out for at
              four in the morning wake up owner meeeeeeooww scratch at legs
            </p>
            <div className={styles.signUp}>
              <span>Don't have an account? </span>{' '}
              <Link className={styles.link} to="/signup">
                Sign Up
              </Link>
            </div>
            <form className={styles.form}>
              <div className={styles.inputContainer}>
                <InputField
                  value={email}
                  type="text"
                  onChange={handleEmailChange}
                  label="Email"
                />

                <InputField
                  value={password}
                  type="password"
                  onChange={handlePasswordChange}
                  label="Password"
                />
              </div>

              <Button
                type="button"
                buttonType={TYPES.PRIMARY}
                buttonSize={SIZES.SMALL}
                onClick={handleSignIn}
              >
                Sign In
              </Button>
            </form>
            {isSignedIn ? <Redirect noThrow to="/getStarted" /> : null}
            {/* {createdAccount ? <Redirect noThrow to="/getStarted" /> : null} */}
          </div>
        </div>
      </div>
    </div>
  )
}
