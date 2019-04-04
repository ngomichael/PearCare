import React, { useState } from 'react'
import { Link } from '@reach/router'
import styles from './sign-in.module.css'
import { Button, TYPES, SIZES } from '../common/button'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Log into your PearCare Account</p>
      <form className={styles.form}>
        <input
          className={styles.input}
          value={email}
          type="text"
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          className={styles.input}
          value={password}
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <Button
          type="button"
          buttonType={TYPES.PRIMARY}
          buttonSize={SIZES.MEDIUM}
        >
          Log In
        </Button>
      </form>
      <Link to="signup">Sign Up</Link>
    </div>
  )
}
