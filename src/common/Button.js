import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './button.module.css'

export const TYPES = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success',
  SECONDARY: 'secondary',
}

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

export const STATUSES = {
  REGULAR: 'regular',
  DISABLED: 'disabled',
}

export const Button = ({
  type,
  buttonType,
  buttonSize,
  onClick = () => {},
  children,
  disabled = false,
}) => {
  const btnClass = classNames(
    // styles.button,
    styles[buttonType || TYPES.PRIMARY],
    styles[buttonSize || SIZES.MEDIUM],
    styles[disabled || 'button']
  )
  return (
    <button
      type={type}
      onClick={onClick}
      className={btnClass}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  buttonSize: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}
