import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <ul className={s.container}>
      <li className={s.item}>
        <span className={s.head}>Good:</span>
        <span className={s.value}>{good}</span>
      </li>
      <li className={s.item}>
        <span className={s.head}>Neutral:</span>
        <span className={s.value}>{neutral}</span>
      </li>
      <li className={s.item}>
        <span className={s.head}>Bad:</span>
        <span className={s.value}>{bad}</span>
      </li>
      <li className={s.item}>
        <span className={s.head}>Total:</span>
        <span className={s.value}>{total}</span>
      </li>
      <li className={s.item}>
        <span className={s.head}>Positive feedback:</span>
        <span className={s.value}>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;