import PropTypes from 'prop-types';
import React from 'react';
import style from './Button.module.scss';

export default function Button({ className, children, ...props }) {
  return (
    <button
      className={className ? `${className} ${style.Button}` : style.Button}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
