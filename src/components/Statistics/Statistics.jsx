import React from "react";

import { PropTypes } from "prop-types";

import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.statisticsContainer}>
      <li className={styles.statistic}>Good: {good}</li>
      <li className={styles.statistic}>Neutral: {neutral}</li>
      <li className={styles.statistic}>Bad: {bad}</li>
      <li className={styles.statistic}>Total: {total}</li>
      <li className={styles.statistic}>
        Positive feedback: {positivePercentage ? positivePercentage + "%" : 0}
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