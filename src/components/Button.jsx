import React from 'react';
import './Button.scss';

const STYLES = [
  "butn-primary-solid",
  "butn-warning-solid",
  "butn-danger-solid",
  "butn-success-solid",
  "butn-primary-outline",
  "butn-warning-outline",
  "butn-danger-outline",
  "butn-success-outline",
];

const SIZES = [
  "butn-med", "butn-sm", "butn-xsm",
];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return(
    <button
      className={`butn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      { children }
    </button>
  )
};
