import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as LoftTaxi } from '../../assets/svg/lofttaxi.svg';
import style from './FullLogo.module.scss';

export default function FullLogo({ vertical }) {
  return (
    <div
      className={
        vertical
          ? `${style.FullLogo} ${style['FullLogo--vertical']}`
          : style.FullLogo
      }
    >
      <Logo
        data-testid='logo'
        className={style.FullLogo__logo}
      />
      <LoftTaxi
        data-testid='lofttaxi'
        className={style.FullLogo__text}
      />
    </div>
  );
}

FullLogo.propTypes = {
  vertical: PropTypes.bool,
};
