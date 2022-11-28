import React from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.scss';

export default function Modal({ className, children }) {
  return (
    <div className={className ? `${className} ${style.Modal}` : style.Modal}>
      {children}
    </div>
  );
}

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
