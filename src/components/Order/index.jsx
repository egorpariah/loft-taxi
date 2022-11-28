import PropTypes from 'prop-types';
import React from 'react';
import style from './Order.module.scss';

export default function Order({ className }) {
  return (
    <section
      className={className ? `${className} ${style.Order}` : style.Order}
    >
      <h1>Заказ</h1>
    </section>
  );
}

Order.propTypes = {
  className: PropTypes.string,
};
