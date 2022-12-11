import React, { useEffect, useState } from 'react';
import style from './Profile.module.scss';
import PropTypes from 'prop-types';
import { Button, Modal } from '../../ui';
import { Input } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Chip } from '../../assets/svg/chip.svg';
import { ReactComponent as MasterCard } from '../../assets/svg/master-card.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset, setProfileCardRequest } from '../../store/slices/userSlice';

export default function Profile({ className }) {
  const [card, setCard] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  const isSuccess = useSelector(state => state.user.isSuccess);
  const authToken = useSelector(state => state.user.token);
  const profileCard = useSelector(state => state.user.profile.card);
  useEffect(() => {
    if (profileCard) {
      setCard(profileCard);
    }
  }, []);

  const dispatch = useDispatch();

  const handleCardInput = e => {
    const v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    setCard({ ...card, cardNumber: v });
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      setCard({ ...card, cardNumber: parts.join(' ') });
    } else {
      return;
    }
  };

  const handleExpireInput = e => {
    const v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    setCard({ ...card, expiryDate: v });
    const matches = v.match(/\d{2,4}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0; i < match.length; i += 2) {
      parts.push(match.substring(i, i + 2));
    }
    if (parts.length) {
      setCard({ ...card, expiryDate: parts.join('/') });
    } else {
      return;
    }
  };

  const handleCvcInput = e => {
    const v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    setCard({ ...card, cvc: v });
    const matches = v.match(/\d{3}/);
    const match = (matches && matches[0]) || '';
    if (match) {
      setCard({ ...card, cvc: match });
    } else {
      return;
    }
  };

  const submitProfile = e => {
    e.preventDefault();

    const profile = {
      ...card,
      token: authToken,
    };

    dispatch(setProfileCardRequest(profile));
  };

  const navigate = useNavigate();

  return (
    <Modal
      className={style.Profile__modal}
      inner={true}
    >
      <h2 className={style.Profile__header}>Профиль</h2>
      <p className={style.Profile__subtitle}>
        {isSuccess
          ? 'Платёжные данные обновлены. Теперь вы можете заказывать такси.'
          : 'Введите платежные данные'}
      </p>
      {isSuccess ? (
        <Button
          className={style.Profile__close}
          onClick={() => {
            navigate('/order');
            dispatch(reset());
          }}
        >
          Перейти на карту
        </Button>
      ) : (
        <form
          className={style.Profile__form}
          onSubmit={submitProfile}
        >
          <div className={style.Profile__container}>
            <div className={style.Profile__inputs}>
              <div className={style.Profile__inputItem}>
                <label
                  className={style.Profile__label}
                  htmlFor='cardName'
                >
                  Имя владельца
                </label>
                <Input
                  onChange={e => setCard({ ...card, cardName: e.target.value })}
                  value={card.cardName}
                  className={style.Profile__input}
                  type='text'
                  id='cardName'
                  name='cardName'
                  required
                />
              </div>
              <div className={style.Profile__inputItem}>
                <label
                  className={style.Profile__label}
                  htmlFor='card'
                >
                  Номер карты
                </label>
                <Input
                  onWheel={e => {
                    e.target.blur();
                    setTimeout(() => {
                      e.target.focus();
                    }, 0);
                  }}
                  value={card.cardNumber}
                  onChange={handleCardInput}
                  className={`${style.Profile__input} ${style['Profile__input--card']}`}
                  type='text'
                  inputProps={{ inputMode: 'numeric' }}
                  id='card'
                  name='card'
                  required
                />
              </div>
              <div className={style.Profile__inputsGroup}>
                <div className={style.Profile__inputItem}>
                  <label
                    className={style.Profile__label}
                    htmlFor='expire'
                  >
                    MM/YY
                  </label>
                  <Input
                    className={style.Profile__input}
                    type='text'
                    id='expire'
                    name='expire'
                    value={card.expiryDate}
                    onChange={handleExpireInput}
                    inputProps={{ pattern: '^(0[1-9]|1[0-2])/?([0-9]{2})$' }}
                    required
                  />
                </div>
                <div className={style.Profile__inputItem}>
                  <label
                    className={style.Profile__label}
                    htmlFor='cvc'
                  >
                    CVC
                  </label>
                  <Input
                    className={style.Profile__input}
                    type='text'
                    id='cvc'
                    name='cvc'
                    value={card.cvc}
                    onChange={handleCvcInput}
                    required
                  />
                </div>
              </div>
            </div>
            <div className={style.Profile__card}>
              <Logo className={style.Profile__logo} />
              <Chip className={style.Profile__chip} />
              <MasterCard className={style.Profile__masterCard} />
              <span className={style.Profile__cardNumber}>
                {card.cardNumber ? card.cardNumber : '0000 0000 0000 0000'}
              </span>
              <span className={style.Profile__expireDate}>
                {card.expiryDate ? card.expiryDate : '00/00'}
              </span>
            </div>
          </div>
          <Button type='submit'>Сохранить</Button>
        </form>
      )}
    </Modal>
  );
}

Profile.propTypes = {
  className: PropTypes.string,
};
