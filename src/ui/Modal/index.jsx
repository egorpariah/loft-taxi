import React from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.scss';

export default function Modal({ className, inner, children }) {
  const classes = [style.Modal];
  if (className) {
    classes.push(className);
  }
  if (inner) {
    classes.push(style['Modal--inner']);
  }

  return (
    <div
      onClick={e => e.stopPropagation()}
      className={classes.join(' ')}
    >
      {children}
    </div>
  );
}

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
