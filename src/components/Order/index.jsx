import PropTypes from 'prop-types';
import React, { useState, useEffect, useMemo } from 'react';
import {
  getAddressListRequest,
  getRouteRequest,
  reset,
} from '../../store/slices/orderSlice';
import { useDispatch, useSelector } from 'react-redux';
import style from './Order.module.scss';
import { Button, Modal, TaxiClass } from '../../ui';
import { MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Order({ className }) {
  const dispatch = useDispatch();
  const [route, setRoute] = useState({ from: '', to: '' });
  const addresses = useSelector(state => state.order.addresses);
  const orderSuccess = useSelector(state => state.order.isSuccess);
  const profile = useSelector(state => state.user.profile);
  const navigate = useNavigate();
  const [activeClass, setActiveClass] = useState('class-1');

  useEffect(() => {
    dispatch(getAddressListRequest());
  }, []);

  const restAddresses = useMemo(
    () => [...addresses].filter(a => a !== route.from && a !== route.to),
    [addresses, route]
  );

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      getRouteRequest({
        address1: route.from,
        address2: route.to,
      })
    );
  };

  return (
    <section
      className={className ? `${className} ${style.Order}` : style.Order}
    >
      <Modal
        className={style.Order__modal}
        inner={true}
      >
        {'card' in profile ? (
          orderSuccess ? (
            <div className={style.Order__modalContainer}>
              <h2 className={style.Order__header}>Заказ размещен</h2>
              <p className={style.Order__text}>
                Ваше такси уже едет к вам. Прибудет приблизительно через 10
                минут.
              </p>
              <Button
                className={style.Order__submit}
                onClick={() => {
                  dispatch(reset());
                  setRoute({ from: '', to: '' });
                }}
              >
                Сделать новый заказ
              </Button>
            </div>
          ) : (
            <form
              className={style.Order__form}
              onSubmit={handleSubmit}
            >
              <div className={style.Order__routes}>
                <Select
                  className={style.Order__route}
                  variant='standard'
                  value={route.from}
                  onChange={e => setRoute({ ...route, from: e.target.value })}
                  displayEmpty={true}
                  renderValue={value => (value !== '' ? value : 'Откуда')}
                  style={{ width: '100%' }}
                >
                  {restAddresses.map((a, i) => (
                    <MenuItem
                      key={i}
                      value={a}
                    >
                      {a}
                    </MenuItem>
                  ))}
                </Select>
                <Select
                  className={style.Order__route}
                  variant='standard'
                  value={route.to}
                  onChange={e => setRoute({ ...route, to: e.target.value })}
                  displayEmpty={true}
                  renderValue={value => (value !== '' ? value : 'Куда')}
                  style={{ width: '100%' }}
                >
                  {restAddresses.map((a, i) => (
                    <MenuItem
                      key={i}
                      value={a}
                    >
                      {a}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <Modal className={style.Order__classes}>
                <ul className={style.Order__classesList}>
                  <TaxiClass
                    switchClass={() => setActiveClass('class-1')}
                    activeClass={activeClass}
                    defaultActive={true}
                    id='class-1'
                    name='Стандарт'
                    price='150'
                  />
                  <TaxiClass
                    switchClass={() => {
                      setActiveClass('class-2');
                    }}
                    activeClass={activeClass}
                    name='Премиум'
                    price='250'
                    id='class-2'
                  />
                  <TaxiClass
                    switchClass={() => setActiveClass('class-3')}
                    activeClass={activeClass}
                    name='Бизнес'
                    price='300'
                    id='class-3'
                  />
                </ul>
                <Button
                  className={style.Order__submit}
                  type='submit'
                >
                  Заказать
                </Button>
              </Modal>
            </form>
          )
        ) : (
          <div className={style.Order__modalContainer}>
            <h2 className={style.Order__header}>
              Платёжные данные не заполнены
            </h2>
            <p className={style.Order__text}>
              Чтобы совершить заказ, вам нужно заполнить платёжные реквизиты в
              профиле.
            </p>
            <Button
              className={style.Order__submit}
              onClick={() => navigate('/profile')}
            >
              Перейти в профиль
            </Button>
          </div>
        )}
      </Modal>
    </section>
  );
}

Order.propTypes = {
  className: PropTypes.string,
};
