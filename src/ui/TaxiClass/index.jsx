import React, { useState } from 'react';
import Modal from '../Modal';
import style from './TaxiClass.module.scss';

export default function TaxiClass({
  name,
  price,
  activeClass,
  id,
  switchClass,
}) {
  return (
    <li
      className={[
        style.TaxiClass,
        activeClass === id ? style['TaxiClass--active'] : '',
      ].join(' ')}
    >
      <Modal
        inner={true}
        className={style.TaxiClass__modal}
      >
        <label
          onClick={switchClass}
          className={style.TaxiClass__label}
          htmlFor={id}
        >
          <h3 className={style.TaxiClass__class}>{name}</h3>
          <div className={style.TaxiClass__price}>
            <span className={style.TaxiClass__priceTitle}>Стоимость</span>
            <span className={style.TaxiClass__priceValue}>{price} ₽</span>
          </div>
          <div
            className={`${style.TaxiClass__car} ${
              style[`TaxiClass__car--${id}`]
            }`}
          ></div>
        </label>
        <input
          defaultChecked={activeClass === id}
          className={style.TaxiClass__input}
          type='radio'
          name='class'
          id={id}
        />
      </Modal>
    </li>
  );
}
