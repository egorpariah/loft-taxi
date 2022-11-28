import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import style from './Menu.module.scss';

export default function Menu({ className }) {
  const { logout } = useContext(AuthContext);
  const unauthenticate = () => {
    logout();
  };

  const NavLink = React.forwardRef((props, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        {...props}
        className={({ isActive }) =>
          isActive
            ? `${props.className} ${style['Menu__link']} ${style['Menu__link--active']}`
            : `${props.className} ${style['Menu__link']}`
        }
      />
    );
  });

  return (
    <nav className={`${className} ${style.Menu}`}>
      <ul className={style.Menu__list}>
        <li className={style.Menu__item}>
          <Link
            variant='menu'
            underline='none'
            component={NavLink}
            to='/order'
          >
            Карта
          </Link>
        </li>
        <li className={style.Menu__item}>
          <Link
            variant='menu'
            underline='none'
            component={NavLink}
            to='/profile'
          >
            Профиль
          </Link>
        </li>
        <li className={style.Menu__item}>
          <Link
            variant='menu'
            underline='none'
            component='button'
            onClick={unauthenticate}
          >
            Выйти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  className: PropTypes.string,
};
