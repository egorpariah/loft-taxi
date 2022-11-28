import React from 'react';
import style from './Profile.module.scss';
import PropTypes from 'prop-types';

export default function Profile({ className }) {
  return (
    <section
      className={className ? `${className} ${style.Profile}` : style.Profile}
    >
      <h1>Профиль</h1>
    </section>
  );
}

Profile.propTypes = {
  className: PropTypes.string,
};
